<?php
/*
  Template Name: Store
  
  */
?>

<?php get_header(); ?>


      
       <section id="portfolioGallery">
       
        <h1><?php the_title(); ?></h1>
        <p><?php the_content();?></p>
          
         <ul class="products">
           <li id="img1"><img src="/wp-content/themes/zandism-template/images/portfolio_page_images/Head In The Clouds.png" alt="Artwork for sale"></li>
           <li id="img2"><img src="/wp-content/themes/zandism-template/images/portfolio_page_images/Landscape.png" alt="Artwork for sale"></li>
           <li id="img3"><img src="/wp-content/themes/zandism-template/images/portfolio_page_images/leo print.png" alt="Artwork for sale"></li>
           <li id="img4"><img src="/wp-content/themes/zandism-template/images/portfolio_page_images/Rocket1.png" alt="Artwork for sale"></li>
           <li id="img5"><img src="/wp-content/themes/zandism-template/images/portfolio_page_images/Rocket2.png" alt="Artwork for sale"></li>
           <li id="img6"><img src="/wp-content/themes/zandism-template/images/portfolio_page_images/Twin Towers; Dystopia.png" alt="Artwork for sale"></li>
           <li id="img7"><img src="/wp-content/themes/zandism-template/images/portfolio_page_images/Twin Towers; Utopia.png" alt="Artwork for sale"></li>
        </ul>
        
      </section>
    
      
  





 <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
 
     
      
      
      
      <?php endwhile; else : ?>
	    <p><?php _e( 'Sorry, no pages found' ); ?></p>
     <?php endif; ?>

   
    




<?php get_footer(); ?>