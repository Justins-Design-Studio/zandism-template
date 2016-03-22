<?php
/*
  Template Name: Blog
  
  */
?>


<?php get_header(); ?>


<section id="blog">


  <h1>BLOG</h1>
     
      
    
      
    <div id="blogRoll" class="clearfix">
     
       
         
         <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
         
          <article class="postPreview">
          
          <div class="blogImgWrap">
            <?php the_post_thumbnail(); ?>
          </div>
         
          <div id="blogText">
          
          <h5><?php the_title(); ?></h5>
          <h6><?php the_date();  ?></h6>
          
          <p><?php the_content(); ?></p>
          
          </div>
            </article>
          
        <?php endwhile; else : ?>
	     <p><?php _e( 'Sorry, no pages found' ); ?></p>
        <?php endif; ?>
          
    
        
    </div>
      
      
</section>
    

<?php get_footer(); ?>