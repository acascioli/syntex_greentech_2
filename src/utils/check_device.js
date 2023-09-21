/* Storing user's device details in a variable*/
let details = navigator.userAgent;
/* Creating a regular expression 
containing some mobile devices keywords 
to search it in details string*/
let regexp = /android|iphone|kindle|ipad/i;

/* Using test() method to search regexp in details
it returns boolean value*/
let isMobileDevice = regexp.test(details);

const team_contact = document.querySelectorAll(".team-contact");

if (isMobileDevice) {
} else {
  team_contact.forEach((item) => {
    const team_tag = item.querySelector(".team-tag");

    team_tag.href = "mailto:info@syntexgreen.tech";
  });
}
