const sidebar = document.querySelector('.side-bar');

      function openSidebar() {
        sidebar.style.left = '0';
      }

      function closeSidebar() {
        sidebar.style.left = '-300px';
      }

      function toggleSubmenu(event) {
        event.preventDefault();
        const submenu = event.target.nextElementSibling;
        submenu.classList.toggle('active');
      }

      function toggleArrowRotation1() {
        const arrow = document.getElementById("dropdown-arrow1");
        arrow.classList.toggle("rotate");
      }
      function toggleArrowRotation2() {
        const arrow = document.getElementById("dropdown-arrow2");
        arrow.classList.toggle("rotate");
      }
