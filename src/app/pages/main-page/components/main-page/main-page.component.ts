import {Component, OnInit} from '@angular/core';
import {ButtercmssdkService} from '../../../../services/buttercmssdk.service';
import {ActivatedRoute} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})


  export class MainPageComponent implements OnInit {
    pageData: any;
    posts: any;
  
    ngOnInit(): void {
      // Hardcoded page content (sample structure matching your components):
      this.pageData = {
        body: [
          { 
            type: 'hero', 
            fields : {
              scroll_anchor_id: 'home',
              headline: 'Welcome to AS MANUFACTURING SOLUTIONS',
              subheadline: 'Building Trust Through Engineering Excellence and Precision Manufacturing.',
              button_url: '/inquiry',
              button_label: 'Inquiry Us',
              image:"assets/images/LOGO/logo-2.png"
            }
          
          },
          { 
            type: 'two_column_with_image', 
            fields: { 
              headline: 'About Us', 
              subheadline: 'At AS Manufacturing Solutions, we believe that precision and innovation are the foundations of lasting success. Built on a deep commitment to engineering excellence, we deliver cutting-edge manufacturing solutions tailored to the evolving needs of modern industries. Our advanced facilities, expert craftsmanship, and customer-first approach enable us to turn complex ideas into reliable, high-quality products that drive performance and growth.Every solution we provide is a reflection of our core values — quality, precision, and partnership. From intricate machining components to large-scale production systems, we ensure that every detail meets the highest standards. Our team of skilled professionals works closely with clients to understand their challenges, innovate around their goals, and deliver solutions that empower their future.At AS Manufacturing Solutions, we are more than just manufacturers — we are collaborators, innovators, and problem-solvers, dedicated to helping industries build a stronger, smarter tomorrow.', 
              image: "assets/images/LOGO/logo-2.png",
              button_url: '/inquiry',
              button_label: 'Know More',

            } 
          },
          { 
            type: 'products', 
            fields: { 
              features: [
                { title: 'Feature One', description: 'Description of feature one.' },
                { title: 'Feature Two', description: 'Description of feature two.' },
                { title: 'Feature Three', description: 'Description of feature three.' }
              ] 
            } 
          },
          { 
            type: 'testimonials', 
            fields: { 
              testimonials: [
                { quote: '“This product changed my life!”', author: 'Alice' },
                { quote: '“Excellent service and support.”', author: 'Bob' }
              ] 
            } 
          }
          // Note: We exclude 'blog_section' here because we handle it separately below.
        ]
      };
  
      // Hardcoded latest blog posts (2 sample posts):
      this.posts = {
        data: {
          data: [
            {
              title: 'Sample Post 1',
              slug: 'sample-post-1',
              summary: 'This is the first sample blog post summary.',
              featured_image: 'assets/post1.jpg',
              published: '2025-01-01'
            },
            {
              title: 'Sample Post 2',
              slug: 'sample-post-2',
              summary: 'This is the second sample blog post summary.',
              featured_image: 'assets/post2.jpg',
              published: '2025-02-15'
            }
          ]
        }
      };
    }
  }
  




