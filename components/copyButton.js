import { CopyIcon } from '@radix-ui/react-icons'
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

function copyMeetingDetailsToClipboard() {
  const meetingDetails = `
MEETING June 21st 2023

**General**

• Meeting Roles
    • Facilitator: Johanna
    • Jockey: Nicola
    • Scribe: Elliot

• Next meeting
    • Date: 2023-06-21 (Thursday)
    • Facilitator: Maie-Anne
    • Jockey: Audrey
    • Scribe: Elyse
    • Location: Online

**Recurring (15-30m)**
  • Attendance
     # people: 
  • Check-in
  
  • Monthly Check-in
     Next date for monthly check-in: 2023-07-07 (Vendredi, SR)

  • Basement check
    Is the basement clean? 
  `;

  const tempElement = document.createElement('div');
  tempElement.innerHTML = meetingDetails;

  const plainText = tempElement.textContent || tempElement.innerText;

  const textarea = document.createElement('textarea');
  textarea.value = plainText;

  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  console.log('Meeting details copied to clipboard.');
}






export default function copyButton({ children }) {
  return (
    <button onClick={copyMeetingDetailsToClipboard}>
      <CopyIcon/>
    </button>
    
  );
}
<CopyIcon/>