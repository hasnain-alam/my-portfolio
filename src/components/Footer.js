import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-500 text-white p-4 text-center">
      <p>&copy; 2024 Md Hasnain Alam. All rights reserved.</p>
      <p>
        <a href="https://github.com/hasnain-alam" className="underline">
          GitHub
        </a>{" "}
        |{" "}
        <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGNOCqmByozAAAAAZTC1TQg5JKqyKR9YVUyiCG7_yEVDmVt7AC5NqXwBuIvvN-utf_ML6z0LF_l4yaNmmgVNt6uSAc5lnXLRJK8ns84Xy2Gjc8yuiF0_QUte2gr55_PSLmUwwM=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmd-hasnain-alam-212839256%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app" className="underline">
          LinkedIn
        </a>
      </p>
    </footer>
  );
}

export default Footer;