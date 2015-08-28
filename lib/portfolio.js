import drought from '../src/files/drought.pdf';

const portfolioData = [
  {
    title: '[HelloBacker](http://www.hellobacker.com/)',
    description: 'HelloBacker was my internship project while working at Made \
    by Many. Together with two other interns I was tasked to build a \
    launch-ready product from the ground-up in twelve weeks. HelloBacker is \
    the result of that effort. As the software developer on our team, I built \
    the entire thing from scratch and was responsible for all technical and \
    architectural decisions. I built the app using React and Alt as a \
    single-page app front-end. The back-end is powered by Express and \
    Bookshelf, an ORM that sits atop a PostgreSQL database.',
    links: [
      {
        type: 'file-text',
        href: 'https://medium.com/mxm-nyc-internship/introducing-hellobacker-1f13189b7fd5'
      },
      {
        type: 'desktop',
        href: 'http://www.hellobacker.com/'
      }
    ],
    image: 'hb.jpg'
  },
  {
    title: '[STACKS](https://github.com/bitslabsyr/stack)',
    description: 'STACKS is an app built for collecting and analyzing massive \
    amounts of social media data from networks such as Twitter & Facebook. As \
    the lead developer for the project, I built and mantain most of the STACKS \
    codebase, which uses Python, Flask, and Celery. I took STACKS from a \
    collection of Python scripts to a full-featured tool complete with a \
    front-end interface used by researchers across Syracuse University.',
    links: [
      {
        type: 'github',
        href: 'https://github.com/bitslabsyr/stack'
      }
    ],
    image: 'stacks.jpg'
  },
  {
    title: '[Drought In America](http://drought.ceskavich.com/)',
    description: 'For my final project in an introductory data visualization \
    course, I produced a poster focusing on the ongoing drought in California. \
    On my own, I also created an interactive web version which focuses on \
    drought trends in the United States from 2000 to the present day. I used \
    Python and R to scrape and analyze the data, and then used the D3 Framework \
    and Adobe Illustrator to render the final visualizations.',
    links: [
      {
        type: 'github',
        href: 'https://github.com/bceskavich/us-drought'
      },
      {
        type: 'file-pdf-o',
        href: drought
      },
      {
        type: 'desktop',
        href: 'http://drought.ceskavich.com/'
      }
    ],
    image: 'drought.jpg'
  },
  {
    title: '[Hack Upstate](http://hackupstate.com/)',
    description: "I started freelancing with Hack Upstate in June 2014 and \
    worked regularly with the team thru May 2015. A big part of my effort was \
    building and maintaining our web presence. I've also worked closely to \
    maintain our partnership with AT&T as we worked together on three civic \
    hackathons: [#ATTWNY](http://attwny.hackupstate.com/), \
    [#ATTCNY](http://attcny.hackupstate.com/), and \
    [#TechValleyATT](http://techvalleyatt.hackupstate.com/).",
    links: [
      {
        type: 'desktop',
        href: 'http://hackupstate.com/'
      }
    ],
    image: 'hu.jpg'
  },
  {
    title: '[NEXIS Research Center](http://nexis.ischool.syr.edu/)',
    description: 'I designed and built a new website for NEXIS, a \
    interdisciplinary student research center thru the Syracuse University \
    iSchool. The website was the first implementation of a new design style for \
    the lab, so I was able to define new standards for the team of students.',
    links: [
      {
        type: 'github',
        href: 'https://github.com/rosslazer/thewall'
      },
      {
        type: 'desktop',
        href: 'http://nexis.ischool.syr.edu/'
      }
    ],
    image: 'nexis.jpg'
  },
  {
    title: '[Grov](http://grov.ceskavich.com/)',
    description: 'A personal project I worked on for NEXIS, Grov uses D3 and \
    the Twitter REST API to render a Twitter user network visualization. I put \
    together an (admittedly clunky) network graph, where larger nodes are \
    shared followers among the users who have logged in.',
    links: [
      {
        type: 'github',
        href: 'https://github.com/bceskavich/grov'
      },
      {
        type: 'desktop',
        href: 'http://grov.ceskavich.com/'
      }
    ],
    image: 'grov.jpg'
  },
  {
    title: '[Bulletin](#)',
    description: 'Bulletin was part of an independent study I did in Spring \
    2013 on news APIs. I built a web app that scrapes the web for content \
    related to stories saved in a user’s Pocket account. It was one of my first \
    forays into the Flask framework, and I also worked with several different \
    news APIs to get it going.',
    links: [
      {
        type: 'github',
        href: 'https://github.com/bceskavich/bulletin'
      }
    ],
    image: 'bulletin.jpg'
  }
];

export default portfolioData;
