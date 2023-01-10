const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

//show sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block"; 
})

//hide sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none"; 
})

//change Theme
themeToggler.addEventListener("click", () =>{
  document.body.classList.toggle("dark-theme-variables");
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
})

//fill ticket table
Tickets.forEach(ticket => {
  const tr = document.createElement("tr");
  const trContent = `
                      <td>${ticket.TicketCreator}</td>
                      <td>${ticket.TicketReason}</td>
                      <td>${ticket.TicketStaff}</td>
                      <td class="${ticket.TicketStatus === "Not Completed" ? "danger" : ticket.TicketStatus === "Completed" ? "success" : "primary"}">${ticket.TicketStatus}</td>
                      <td>${ticket.TicketDate}</td>
                      `;
 tr.innerHTML = trContent;
 document.querySelector("table tbody").appendChild(tr);
})