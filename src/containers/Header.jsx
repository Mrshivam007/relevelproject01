
function Header() {
    return(
        <>
         <nav class="navbar bg-light">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">My Store</span>
<i class='fas fa-cart-arrow-down'></i>
  </div>
</nav>


<nav class="navbar bg-scccess" style={{backgroundColor: "#44496c"}}>
  <div class="container-fluid">
    <div class="search">
      <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
      <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
     </button>
   </div>
  </div>
</nav>
        </>
    )
}
export default Header;