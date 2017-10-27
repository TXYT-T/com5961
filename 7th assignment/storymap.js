// storymap_data can be an URL or a Javascript object
//var storymap_data = '//media.knightlab.com/StoryMapJS/demo/demo.json';

var storymap_data = {

  storymap: {
    slides: [{
      type: "overview",
      date: "2014",
      text: {
        headline: "The Grand Budapest Hotel",
        text: "<p>The Grand Budapest Hotel is a 2014 comedy film written and directed by Wes Anderson, from a story by Anderson and Hugo Guinness, inspired by the writings of Stefan Zweig.</p>"
      },
      media: {
        url: "https://img3.doubanio.com/view/photo/raw/public/p2175598195.jpg",
        credit: "The Grand Budapest Hotel",
        caption: "About The Grand Budapest Hotel"
      }
    }, {
      date: "2014",
      text: {
        headline: "The Grand Budapest Hotel",
        text: "<p> The Grand Budapest Hotel was owned by Monsieur Gustave. By his management, the hotel had its glory days. Gustave courts a series of aging, blonde women who all flock to the hotel to enjoy his exceptional service. One of these, Madame D, spends the night with Gustave prior to her departure. </p>"
      },
      location: {
        name: "The Grand Budapest Hotel",
        icon: "https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/blue-pushpin.png",
        lat: 51.09, 
        lon: 14.59,
        zoom: 16,
        line: true
      },
      media: {
        url: "https://img3.doubanio.com/view/photo/raw/public/p2233336213.jpg",
        type: 		"image",
        credit: "The Grand Budapest Hotel",
        caption: "Görlitz Department Store"
      }
    }, {
      date: "2014",
      text: {
        headline: "Check-Point 19:",
        text: "<p>M.Gustave is informed that Madame D has died under mysterious circumstances. He and Zero race to her wake where he learns that she bequeathed him a valuable painting in her will. This enrages her family, all of whom hoped to inherit it, especially her son, Dmitri Desgoffe-und-Taxis. Gustave and Zero take the painting and hide it in a safe at the Grand Budapest. He is then arrested and framed for the murder of Madame D. The prison is Check-Point 19. </p> "
      },
      location: {
        name: "Castle Osterstein",
        lat: 51.02,
        lon: 13.01,
        zoom: 16,
        line: true
      },
      media: {
        url: "https://img3.doubanio.com/view/photo/raw/public/p2186530180.jpg",
        credit: "The Grand Budapest Hotel",
        caption: "Castle Osterstein"
      }
      
    }]
  }
}

// certain settings must be passed within a separate options object
var storymap_options = {
  language: 'en', // required; two-letter ISO language code
  map_type: 'osm:standard',          // required
  // map_type: 'zoomify',
  map_as_image: false, // required
  calculate_zoom: true,
  map_subdomains: '01234', // optional
};

var storymap = new VCO.StoryMap('mapdiv', storymap_data, storymap_options);
window.onresize = function(event) {
  storymap.updateDisplay(); // this isn't automatic
}