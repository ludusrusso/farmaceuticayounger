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
  let collapsed = document.getElementById("collapse");
  collapsed.classList.toggle("hidden-on-mobile")
}

let posts = document.getElementById('post-list-hidden').children;
let container = document.getElementById('list-container');

function computeLayout(col_cnt) {
  container.innerHTML = '';
  for (let i = 0; i < col_cnt; i++) {
    let col = document.createElement('div');
    col.className = "col";
    container.appendChild(col);
  }
  console.log(posts)
  for (let i = 0; i < posts.length; i++) {
    container.children[ i % col_cnt].innerHTML += posts[i].outerHTML;
  }
}


let COL_CNT = Math.trunc(container.clientWidth/264) || 1;

computeLayout(COL_CNT);

window.addEventListener("resize", () => {
  let col_cnt = Math.trunc(container.clientWidth/264) || 1;
  if (col_cnt != COL_CNT) {
    COL_CNT = col_cnt;
    computeLayout(COL_CNT);
  }
})


