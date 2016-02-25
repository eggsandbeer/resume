define(['app'], function(Portfolio){
    Portfolio.module('Entities', function(Entities, Portfolio, Backbone, Marionette, $, _){

        Entities.Area = Backbone.Model.extend({
            id: 1
        });

        Entities.Areas = Backbone.Collection.extend({
            url: "",
            model: Entities.Area
        });

        var initializeAreas = function(){
            var list = new Entities.Areas([
                {
                    id: 1,
                    title: "Tag Idea Revolution",
                    url: "http://idearevolution.ca/",
                    urltitle: "http://idearevolution.ca/",
                    content: "I was completely responsible for the frontend of this single page project and also wrote the data blueprint for the relation between links, categories, posts, etc. I used Backbone and RequireJS to consume an API that was spit out from a handly little JSON plugin that we found for Wordpress. The project is supposed to be responsive and to a large extend it is, but a site that is supposed to adapt to fit ANY size device is pretty tricky to accomplish and you can see some of the seems showing on some pages. Still, I'm proud of this site, and it certainly walked me through the basics and more advanced sides of MVC frameworks like Backbone.",
                    images: [
                        {
                            src: 'images/work/1.1.jpg',
                            alt: 'tag Idea Revolution Image 1'
                        },
                        {
                            src: 'images/work/1.2.jpg',
                            alt: 'tag Idea Revolution Image 2'
                        },
                        {
                            src: 'images/work/1.3.jpg',
                            alt: 'tag Idea Revolution Image 4'
                        },
                        {
                            src: 'images/work/1.4.jpg',
                            alt: 'tag Idea Revolution Image 4'
                        }
                    ]

                },
                {
                    id: 2,
                    title: "Nissan/Infiniti Marketing Manager",
                    url: "http://www.tmsw.com/toronto/our-work-0",
                    urltitle: "Client facing -- not accessible to public",
                    content: "I was responsible for consuming the java powered API that we produced for this app. We used handlebars as out templating engine to handle our JSON responses (which were substantial) but this was in the days before I really knew what MVC on the frontend really was. So, there is a lot of data attrs here to find and check the status of elements and then update accordingly. Lots of form submissions, lots of slideshows, lots of twitter's bootstrap and LESS and lots and lots and lots of JSON consumption. Good stuff.",
                    images: [
                        {
                            src: 'images/work/2.1.png',
                            alt: 'Nissan/Infiniti Marketing Manager Image 1'
                        },
                        {
                            src: 'images/work/2.2.png',
                            alt: 'Nissan/Infiniti Marketing Manager Image 2'
                        },
                        {
                            src: 'images/work/2.3.png',
                            alt: 'Nissan/Infiniti Marketing Manager Image 3'
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Kraft Celebration Tour 2012",
                    url: "http://www.kraftcelebrationtour.ca/en/",
                    urltitle: "Kraft Celebration Tour (2012 link no longer available)",
                    content: "I was responsible for writing all of the css and html markup for this site for everything from forms to the projects container scaffolding. As well, I worked with django to call for data to display. I wrote a lot of the javascript on things like timers and countdown displays, comment handling, form submission validation, slideshows and more. It was the most javascript I'd ever written.",
                    images: [
                        {
                            src: 'images/work/3.1.png',
                            alt: 'Kraft Celebration Tour 2012 Image 1'
                        },
                        {
                            src: 'images/work/3.2.png',
                            alt: 'Kraft Celebration Tour 2012 Image 2'
                        },
                        {
                            src: 'images/work/3.3.png',
                            alt: 'Kraft Celebration Tour 2012 Image 3'
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Royal Lepage Commercial",
                    url: "http://www.royallepagecommercial.com/",
                    urltitle: "http://www.royallepagecommercial.com/",
                    content: "I was responsible for writing all of the css and html markup for this site for everything from forms to the projects container scaffolding. As well, I worked with django to call for data to display on blogs, agent profiles, etc, etc. I wrote some of the javascript on some of the slideshows that are buried inside the site, and then helped out too with submitting data through ajax for various forms around the site.",
                    images: [
                        {
                            src: 'images/work/4.1.png',
                            alt: 'Royal Lepage Commercial Image 1'
                        },
                        {
                            src: 'images/work/4.2.png',
                            alt: 'Royal Lepage Commercial Image 2'
                        },
                        {
                            src: 'images/work/4.3.png',
                            alt: 'Royal Lepage Commercial Image 3'
                        }
                    ]
                },
                {
                    id: 5,
                    title: "Facebook Thinsations Sampling App",
                    url: "https://www.facebook.com/Thinsations",
                    urltitle: "https://www.facebook.com/Thinsations (expired -- app no longer available)",
                    content: "The first commerical project I was ever involved with. I built the css for this facebook app and learned my way around facebook's SDK. Mostly though, this was where I learned about some of the more advanced elements inside webpage styling. SMACS, LESS (style vars, extends, mixins, import options), the difference between using glyphicons and vectors, style sheet concatentation and minification, Django's pipeline. 'This styling of website thing can get way more complicated than I thought' I remember thinking.",
                    images: [
                        {
                            src: 'images/work/5.1.png',
                            alt: 'Facebook Thinsations Sampling App Image 1'
                        },
                        {
                            src: 'images/work/5.2.png',
                            alt: 'Facebook Thinsations Sampling App Image 2'
                        },
                        {
                            src: 'images/work/5.3.png',
                            alt: 'Facebook Thinsations Sampling App Image 3'
                        }
                    ]
                },
                {
                    id: 6,
                    title: "Langara College Projects",
                    url: "#project/6",
                    urltitle: "Lost to the great unbacked up hard drive in the sky",
                    content: "I went to Langar College for their interactive design and development program (which is now defunct). Langara isn't known for producing developers, but it was definitely my focus when I went there. I tried to bring all of my projects back to code somehow. I knew this was what I wanted to do. I used the google globe project to display a dataset. I built my own font using fontstruct's site and I launched a number of small sites for displaying my work. I had a rudementary degree of knowledge about web basics before Langara. After Langara, my foundational knowledge was stronger. The difference between position absolute and relative. What a script tag is. What a variable is. Em vs rems vs px (though not how to use them properly). It was these basic things that I honed while at Langara.",
                    images: [
                        {
                            src: 'images/work/6.1.jpg',
                            alt: 'Langara College Projects Image 1'
                        },
                        {
                            src: 'images/work/6.2.jpg',
                            alt: 'Langara College Projects Image 2'
                        },
                        {
                            src: 'images/work/6.3.jpg',
                            alt: 'Langara College Projects Image 3'
                        }
                    ]
                },
                {
                    id: 7,
                    title: "PWS Consulting",
                    url: "#project/7",
                    urltitle: "Dad found work so he let this thing expire. Probably for the best.",
                    content: "So I built this website for my Dad. I even did the logo design. Thankfully, I don't think it exists anywhere on the internet anymore. You are looking at probably the only known photo of that site. Anywhoo, I'm going to follow the rule of 'If you have nothing good to say, don't say anything at all' about this site and just sum it up by saying that my Dad found a great consulting gig after we built this site together. I like to think I played a small part in that.",
                    images: [
                        {
                            src: 'images/work/7.1.jpg',
                            alt: 'Paul W Strandberg Consulting'
                        }
                    ]
                },
                {
                    id: 8,
                    title: "cameronstrandberg.com mock 2",
                    url: "#project/8",
                    urltitle: "Well. It could go back online, if I bothered setting up a site with wordpress.",
                    content: "The first website that I actually used my own javascript on. My first js? Shock, horror, a photo slideshow carousel. I'm sure if I read over it today, I'd hang my head in abject shame, but hey, you've got to start somewhere. The day I realized that carousels are often just tricks being played with margins and widths, was the day I said to myself 'I can absolutely figure out this web development stuff.'",
                    images: [
                        {
                            src: 'images/work/8.1.png',
                            alt: 'cameronstrandberg.com mock 2 Image 1'
                        },
                        {
                            src: 'images/work/8.2.png',
                            alt: 'cameronstrandberg.com mock 2 Image 2'
                        },
                        {
                            src: 'images/work/8.3.png',
                            alt: 'cameronstrandberg.com mock 2 Image 3'
                        }
                    ]
                },
                {
                    id: 9,
                    title: "cameronstrandberg.com mock 1",
                    url: "#project/9",
                    urltitle : "It's gone and the word is a better place for it.",
                    content: "One of the first websites I ever launched. Oh wordpress, I loved you so once. A prime example of the importance of taking screen shots of your work.",
                    images: [
                        {
                            src: 'images/work/9.1.jpg',
                            alt: 'cameronstrandberg.com mock 1 Image 1'
                        }
                    ]
                },
                {
                    id: 10,
                    title: "QuickMobile Inc.",
                    url: "http://www.quickmobile.com/",
                    urltitle: "http://www.quickmobile.com/ (client facing site)",
                    content: "My current awesome gig. QuickMobile needed a significant overhaul of thier javascript best practices and codebase when I started working fulltime for this Vancouver based shop. From folder structures to decisions about what design patterns to follow, major decisions and updates were required. We're in the process of bring online a new Backbone/Marionette/RequireJS flavoured framework (which I am spearheading on the design and implementation fronts) to handle all of our javascript, along with using tools like bower and grunt. :) Things look bright.",
                    images: [
                        {
                            src: 'images/work/10.1.jpg',
                            alt: 'QuickMobile Inc Image 1'
                        },
                        {
                            src: 'images/work/10.2.jpg',
                            alt: 'QuickMobile Inc Image 2'
                        },
                        {
                            src: 'images/work/10.3.jpg',
                            alt: 'QuickMobile Inc Image 3'
                        }
                    ]
                },
                {
                    id: 11,
                    title: "Timeline",
                    url: "https://m-staging.timeline.com/",
                    urltitle: "http://www.timeline.com/ (deprecated)",
                    content: "Although now replaced with a Medium site, I did a significant amount of work on features for the old timeline.com. Timeline.com was an express/jade app with jQuery plugin based javascript and SASS powered stylesheets, along with a long list of gulp tasks. I fixed numerous bugs, built things like email subscription pop up modals and maintained the numerous gulp tasks that went along with the project. As well, I did a lot of bug fixes and feature addition and maintenance to the CMS and curation tools that powered the articles for timeline.com Sad to see it all go because this was a pretty big codebase that a lot of people worked very hard on, but on to bigger and better things, I guess.",
                    images: [
                        {
                            src: 'images/work/11.1.png',
                            alt: 'Timeline Homepage Image 1'
                        },
                        {
                            src: 'images/work/11.2.png',
                            alt: 'Timeline Homepage Image 2'
                        },
                        {
                            src: 'images/work/11.3.png',
                            alt: 'Timeline Homepage Image 3'
                        }
                    ]
                },
                {
                    id: 12,
                    title: "Timeline - Embed Builder",
                    url: "http://timeline-embed-staging.herokuapp.com",
                    urltitle: "http://timeline-embed-staging.herokuapp.com/#/embeds?_k=u3r4h0",
                    content: "This was a demo project to allow users to pick a series of webpages and then create an iframe module to display that list in a nice UI. The app would have to scrape the site provided by the user, save the neccessary content and then serve it up for display in the iframe embed constructor UI and then in the iframe UI too. I was mostly responsible for the frontend of the App (although I worked on the API too), which is a single page webapp. Using React and ES6 modules along with webpack and a series of React libs, it was very easy to create components that we could use twofold -- in the frame app and in the embed constructor app. This site was a total success on the technology side, but has not really been picked up from the sales side. Dems da breaks.",
                    images: [
                        {
                            src: 'images/work/12.1.png',
                            alt: 'Timeline Embed Builder Image 1'
                        },
                        {
                            src: 'images/work/12.2.png',
                            alt: 'Timeline Embed Builder Image 2'
                        },
                        {
                            src: 'images/work/12.3.png',
                            alt: 'Timeline Embed Builder Image 3'
                        }
                    ]
                },
                {
                    id: 13,
                    title: "Timeline - Longform",
                    url: "http://staging-longform.timeline.com/sanfrancisco_satanist",
                    urltitle: "http://staging-longform.timeline.com/sanfrancisco_satanist",
                    content: "After timeline switched to using Medium as their primary website and CMS, the content that Timeline publishes was sort of standardized in terms of code and layout options. However, we still wanted to have a a place to publish longform articles with unique layouts and more experimental code options (graphing and mapping with d3, etc.). So, we needed a whole new infrastructure to support this. Hence, longform.timeline.com, which is a little nodejs express app. From getting the hosting with heroku, setting up AWS name servers for the subdomain, setting up heroku pipelines for staging and production and hooking in github and then writing all the styles and javascript, I was responsible for it all. As well, I helped come up with features for the article (maps of locations from the article, satanic pentagrams featuring lead characters from the story, etc.) and even contributed to large parts of the design. Something to be proud of.",
                    images: [
                        {
                            src: 'images/work/13.1.png',
                            alt: 'Timeline Longform Image 1'
                        },
                        {
                            src: 'images/work/13.2.png',
                            alt: 'Timeline Longform Image 2'
                        },
                        {
                            src: 'images/work/13.3.png',
                            alt: 'Timeline Longform Image 3'
                        },
                        {
                            src: 'images/work/13.4.png',
                            alt: 'Timeline Longform Image 4'
                        }
                    ]
                }
            ]);
            return list;
        }

        var API = {
            getMainEntities: function(){
                var list = initializeAreas();
                return list;
            }
        }

        Portfolio.reqres.setHandler("main:areas", function(id){
            return API.getMainEntities(id);
        });
    });
    return;
});
