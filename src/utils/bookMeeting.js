// Fire the custom event that BookMeetingModal listens for.
// Call this from any button/link to open the booking modal.
export function openBookMeeting() {
  window.dispatchEvent(new CustomEvent('es:book-meeting'));
}
