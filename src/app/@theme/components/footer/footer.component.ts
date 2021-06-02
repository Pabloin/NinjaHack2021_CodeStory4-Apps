import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">With ♥ to 
       <b><a href="https://www.theninjaproject.bbva/" target="_blank">Ninja Hack @ 2021</a></b>
    </span>
    <div class="socials">
      <a href="https://github.com/Pabloin/NinjaHack2021_CodeStory4-Apps" target="_blank" class="ion ion-social-github"></a>
      <a href="https://twitter.com/hashtag/theNinjaProject?src=hashtag_click" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.linkedin.com/feed/hashtag/?keywords=hackathonninja" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
