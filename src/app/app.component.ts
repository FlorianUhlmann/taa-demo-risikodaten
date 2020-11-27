import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  SwaggerEditorBundle: any;
  SwaggerEditorStandalonePreset: any;
  
  
  title = 'taa-test-single-component-get-put-request';

  ngOnInit(): void {
     
    const editor = this.SwaggerEditorBundle({
      dom_id: '#swagger-editor',
      layout: 'StandaloneLayout',
      presets: [
        this.SwaggerEditorStandalonePreset
      ],
      url: 'http://rackerlabs.github.io/wadl2swagger/openstack/swagger/dbaas.json'
    });
  }
}
