
$('.carrousel').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  function togglePopup() {
    var popup = document.getElementById("loginPopup");
    popup.style.display = (popup.style.display === "block") ? "none" : "block";
  }
  
  function login() {
    alert("Connexion réussie !");
    
  }