<!DOCTYPE html>
<html lang ="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php wp_title(); ?></title>
    <link rel="icon" type="image/png" href="/wp-content/themes/zandism-template/images/favicon.png">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    
     <?php wp_head(); ?>
   
  </head>

  <body <?php body_class(); ?>>
    
    <header id="mainHeader">
      <a id="homeLink" href="<?php bloginfo('url'); ?>"><img src="/wp-content/themes/zandism-template/images/logo.png" alt="contemporary Art Logo"></a>
      
      <nav>
        <div id="mobileNav" onclick="display()">
          <div class="burgerBar"></div>
          <div class="burgerBar"></div>
          <div class="burgerBar"></div>
        </div>
        
        <?php
		  
		  $defaults = array(
		    'container' => false,
			'theme_location' => 'primary-menu',
			'menu_class' => 'mainNav'
		  );
		  
		  $defaultsMobi = array(
		    'container' => false,
			'theme_location' => 'mobile',
			'menu-class' => 'mobileNav'
		  );
		 wp_nav_menu($defaults, $defaultsMobi);
		  
		?>
        
        <!--
        <ul class="mainNav">
          <li><a href="<?php bloginfo('url'); ?>">My Portfolio</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="shop.html"><button id="shopButton">SHOP</button></a></li>
        </ul>
        -->
        <div id="socialButtons">
          <a href="https://www.facebook.com/Zandism-Contemporary-Artists-457429654454267/" target="_blank"><div class="socialLink1"></div></a>
          <a href="https://www.instagram.com/zandism/" target="_blank"><div class="socialLink2"></div></a>
          <a href="http://zandism.com/contact/"><div class="socialLink3"></div></a>
      </div>
      </nav>
      
    </header>