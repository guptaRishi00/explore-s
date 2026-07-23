// CLIENT SETUP: put your Razorpay Key ID in a project-root .env file as
// REACT_APP_RAZORPAY_KEY_ID=rzp_live_xxx (or rzp_test_xxx) and rebuild.
// Frontend Checkout only — backend signature verification/webhooks are out of
// scope per the agreement (Clause 6.2).

const RAZORPAY_SCRIPT_URL = 'https://checkout.razorpay.com/v1/checkout.js';

let scriptPromise = null;

/**
 * Injects the Razorpay Checkout script once and resolves true when ready.
 * Resolves immediately with true if window.Razorpay already exists.
 * Resolves false on load error.
 */
export function loadRazorpay() {
    if (window.Razorpay) return Promise.resolve(true);
    if (scriptPromise) return scriptPromise;

    scriptPromise = new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = RAZORPAY_SCRIPT_URL;
        script.async = true;
        script.onload = () => resolve(true);
        script.onerror = () => {
            console.error('[Razorpay] Checkout script failed to load from', RAZORPAY_SCRIPT_URL);
            scriptPromise = null; // allow retry
            resolve(false);
        };
        document.body.appendChild(script);
    });

    return scriptPromise;
}

/**
 * Opens the Razorpay Checkout modal.
 *
 * @param {object} opts
 * @param {number}   opts.amount       - Amount in INR (e.g. 10000 for ₹10,000)
 * @param {string}   [opts.description] - Order/purpose description
 * @param {object}   [opts.prefill]    - { name, email, contact } (all optional)
 * @param {function} [opts.onSuccess]  - Called with Razorpay response on payment success
 */
export async function openRazorpayCheckout({
    amount,
    description = 'Explore S — Online Payment',
    prefill = {},
    onSuccess,
}) {
    const key = process.env.REACT_APP_RAZORPAY_KEY_ID || '';

    if (!key) {
        // Friendly message when credentials haven't been configured yet
        alert(
            'Online payment is not configured yet.\n\n' +
            'To enable it, add your Razorpay Key ID to a .env file at the project root:\n' +
            '  REACT_APP_RAZORPAY_KEY_ID=rzp_live_xxx\n\n' +
            'Then rebuild the app.\n\n' +
            'In the meantime, please use Bank Transfer or GPay UPI.'
        );
        return;
    }

    const loaded = await loadRazorpay();

    if (!loaded || !window.Razorpay) {
        alert(
            'Could not load Razorpay Checkout. Please check your internet connection and try again.'
        );
        return;
    }

    const options = {
        key,
        amount: Math.round(amount * 100), // convert INR to paise
        currency: 'INR',
        name: 'Explore S Research Solutions',
        description,
        image: '/logo.png',
        prefill: {
            name: prefill.name || '',
            email: prefill.email || '',
            contact: prefill.contact || '',
        },
        theme: { color: '#004E9E' },
        handler: (response) => {
            if (typeof onSuccess === 'function') {
                onSuccess(response);
            } else {
                alert('Payment successful!\nPayment ID: ' + response.razorpay_payment_id);
            }
        },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
}
