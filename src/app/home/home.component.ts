import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users = [
    {
      name: 'John Doe',
      username: 'john@example.com',
      image:
        'https://s3-alpha-sig.figma.com/img/4865/6e67/f608b1d5690d7ec662fed11cb629f12f?Expires=1698019200&Signature=OrUD~E-9vjeXtSVi6baq5Qfqsm-OFNO7eXDXk1Lz-sop3p1RiXp3Q7-drFxmma2kkRjdqKMNfDAdpaI~LJe3SnokMq3O9zufWf3mY-sdv7-7sLPQmtatRFhD~ik9XlSb0f~aZAR8ijPBgsxwwCxfS9CurwWxMBmaeYyrA5oJWPsvcN3zWifY1X2NP4rUGwHhQAniZXhdfW20gLXsVw9cLCbFi8tEID~MHJv9oy~gEV2H3k1NobBUqfog9UTfqDAG-4noGKcvGH2N-Dja4iIsaY-NBI36xcvpe28Qk0YZlFwcUIohqD6qvu6yku3Du2VYK3qqQTxnlpuks6d6f3b8gA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      joinedDate: new Date('2022-10-08'),
      lastActive: '3 hours ago',
    },

    {
      name: 'John Doe',
      username: 'john@example.com',
      image: 'path/to/image',
      joinedDate: new Date('2022-10-08'),
      lastActive: '3 hours ago',
    },

    {
      name: 'John Doe',
      username: 'john@example.com',
      image: 'path/to/image',
      joinedDate: new Date('2022-10-08'),
      lastActive: '3 hours ago',
    },

    {
      name: 'John Doe',
      username: 'john@example.com',
      image: 'path/to/image',
      joinedDate: new Date('2022-10-08'),
      lastActive: '3 hours ago',
    },

    {
      name: 'John Doe',
      username: 'john@example.com',
      image: 'path/to/image',
      joinedDate: new Date('2022-10-08'),
      lastActive: '3 hours ago',
    },

    {
      name: 'John Doe',
      username: 'john@example.com',
      image: 'path/to/image',
      joinedDate: new Date('2022-10-08'),
      lastActive: '3 hours ago',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
