let buttonBranch = document.getElementById('btnBranch');
let buttonGit = document.getElementById('btnGit');
let buttonDev = document.getElementById('btnDev');
let buttonDump = document.getElementById('btnDump');

function copyText(id, btn) {
   btn.addEventListener('click', () => {
      var textToCopy = document.getElementById(id);
      textToCopy.select();
      document.execCommand("copy");
   });
}

copyText('Branch', btnBranch);
copyText('Git', btnGit);
copyText('Dev', btnDev);
copyText('Dump', btnDump);