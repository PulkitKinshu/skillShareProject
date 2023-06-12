import { Component } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(){
    this.selectedItem = this.productArray[0];
  }
  title = 'ngSlick';
  selectedItem:any;

  slides = [342, 453, 846, 855, 234, 564, 744, 243];

  slideConfig = {
    "slidesToShow": 3.2,
    "dots": false,
    "arrows": false,
    "slidesToScroll": 3,
    "infinite": true,
    "responsive": [
      {
        breakpoint: 1624,
        settings: {
          slidesToShow: 3.2,

        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,

        }
      }
    ]
  };

  addBlur(index:any){
    if(index >= this.productArray.length - 3){
      return 'addBlur'
    }
    return ''

  }

  slideConfigModal = {
    "slidesToShow": 2.2,
    "dots": false,
    "arrows": false,
    "slidesToScroll": 3,
    "infinite": true,
    "responsive": [
      {
        breakpoint: 1624,
        settings: {
          slidesToShow: 2.2,

        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,

        }
      }
    ]
  };



  selectCard(item:{}){
    this.selectedItem = item
  }


  productArray = [
    {
      name: 'David N',
      distance: '4 kms from Brisbane City, QLD',
      location: 'Queensland, QLD',
      rating: '4.4',
      quality: ['Licensed', 'ABN'],
      metaData: false,
      tags: [
        'Architectural Homes',
        'Commercial',
        'Garages',
        'Civil works management',
      ],
      imgPath: 'assets/person1.png',
    },
    {
      name: 'Omar D',
      distance: '4 kms from Brisbane City, QLD',
      location: 'Queensland, QLD',
      rating: '',
      quality: ['Licensed', 'ABN'],
      metaData: true,
      tags: [
        'Architectural Homes',
        'Commercial',
        'Garages',
        'Civil works management',
      ],
      imgPath: 'assets/person2.png',
    },
    {
      name: 'Jacob J',
      distance: '4 kms from Brisbane City, QLD',
      location: 'Queensland, QLD',
      rating: '4.4',
      quality: ['Licensed', 'ABN'],
      metaData: false,
      tags: [
        'Architectural Homes',
        'Commercial',
        'Garages',
        'Civil works management',
      ],
      imgPath: 'assets/person3.png',
    },
    {
      name: 'Omar D',
      distance: '10 kms from London City, QLD',
      location: 'NeW York, QLD',
      rating: '',
      quality: ['Licensed', 'ABN'],
      metaData: false,
      tags: [
        'Architectural Homes',
        'Commercial',
        'Garages',
        'Civil works management',
      ],
      imgPath: 'assets/person1.png',
    },
    {
      name: 'Jacob J',
      distance: '10 kms from London City, QLD',
      location: 'NeW York, QLD',
      rating: '4.4',
      quality: ['Licensed', 'ABN'],
      metaData: false,
      tags: [
        'Architectural Homes',
        'Commercial',
        'Garages',
        'Civil works management',
      ],
      imgPath: 'assets/person2.png',
    },
    {
      name: 'Jacob J',
      distance: '4 kms from Brisbane City, QLD',
      location: 'Queensland, QLD',
      rating: '4.4',
      quality: ['Licensed', 'ABN'],
      metaData: true,
      tags: [
        'Architectural Homes',
        'Commercial',
        'Garages',
        'Civil works management',
      ],
      imgPath: 'assets/person3.png',
    },
    {
      name: 'Mike',
      distance: '4 kms from Brisbane City, QLD',
      location: 'Queensland, QLD',
      rating: '4.4',
      quality: ['Licensed', 'ABN'],
      metaData: false,
      tags: [
        'Architectural Homes',
        'Commercial',
        'Garages',
        'Civil works management',
      ],
      imgPath: 'assets/person1.png',
    },
    {
      name: 'Omar D',
      distance: '4 kms from Brisbane City, QLD',
      location: 'Queensland, QLD',
      rating: '4.4',
      quality: ['Licensed', 'ABN'],
      metaData: false,
      tags: [
        'Architectural Homes',
        'Commercial',
        'Garages',
        'Civil works management',
      ],
      imgPath: 'assets/person1.png',
    },
    {
      name: 'Pulkit',
      distance: '4 kms from Brisbane City, QLD',
      location: 'Queensland, QLD',
      rating: '4.4',
      quality: ['Licensed', 'ABN'],
      metaData: true,
      tags: [
        'Architectural Homes',
        'Commercial',
        'Garages',
        'Civil works management',
      ],
      imgPath: 'assets/person3.png',
    },
  ];
}
