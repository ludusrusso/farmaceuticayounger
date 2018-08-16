// JS Goes here - ES6 supported
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

window.toggleNav = function() {
  let collapsed = document.getElementById("collapase");
  if (collapsed.style.display != "flex") {
    collapsed.style.display = "flex"
  } else {
    collapsed.style.display = "none"
  }
}