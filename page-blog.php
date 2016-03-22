<?php
/*
  Template Name: Blog
  
  */
?>


<?php get_header(); ?>


<section id="blog">


  <h1>BLOG</h1>
  
      <p>Our blog consists of the latest trend, specials, helpfull information, marketing and a few tricks on how to promote your business.</p>
     
      
    
      
    <div id="blogRoll" class="clearfix">
     
       
         
         <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
         <article class="postPreview">
         
              <div class="blogImgWrap">
                <img src="images/portfolio_page_images/Landscape.png" alt="The Zandism Artwork">
              </div>
          
              <h5><?php the_title(); ?></h5>
              <h6><?php the_date();  ?></h6>
          
              <p><?php the_content(); ?></p>
          
          </article>
          
        <?php endwhile; else : ?>
	     <p><?php _e( 'Sorry, no pages found' ); ?></p>
        <?php endif; ?>
          
      
        
    </div>
      
      
</section>
    

<?php get_footer(); ?>