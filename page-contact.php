<?php
/*
  Template Name: Contact
  
  */
?>

<?php

$to='studio@zandism.com';
$subject=$_POST['userSubject'];


$firstName=$_POST['userName'];
$email=$_POST['userEmail'];
$comment=$_POST['userMessage'];

$message=<<<EMAIL

Name: $firstName
Email: $email
Message: $comment



EMAIL;

mail($to, $subject, $message, "From:".$email);

function message_sent() {
                    echo "Your message has been sent.";
                };

?>

<?php get_header(); ?>

      
      <section id="contact">
            <h1><?php the_title(); ?></h1>
            <p><?php the_content();?></p>
            <div id="contactWrap">
                <img src="/wp-content/themes/zandism-template/images/contact-page-image.png" alt="contact information">
            </div>
            <p class="contactText">For all enquiries regarding original artworks, prints or private commissions, please fill out the form below.</p>
            
            <form action="?" method="post" onsubmit="message_sent()">
                
                <p id="message"></p>
            
                <div class="inputFloat">
                    <label for="Name">Your Name:</label>
                    <input type="text" name="userName" id="Name" required>
                </div>
                 
                <div class="inputFloat">
                    <label for="Email">Your Email (Required)</label> 
                    <input type="email" name="userEmail" id="Email" required>
                </div>
                
                <div class="inputFloat">
                    <label for="Subject">Subject</label>
                    <input type="text" name="userSubject" id="Subject">
                </div>
                
                <label for="userComment" id="clearfix">Your Message</label>
                <textarea name="userMessage" id="userComment" cols="40" rows="10" placeholder="Type your message here..."></textarea>
                <input type="submit" name="submitButton" id="submitButton" value="SEND">
            
          </form>
    </section>

 <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
 
     
      
      
      
      <?php endwhile; else : ?>
	    <p><?php _e( 'Sorry, no pages found' ); ?></p>
     <?php endif; ?>


<?php get_footer(); ?>