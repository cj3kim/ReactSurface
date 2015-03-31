# ReactSurface
A modification of famous/core/Surface so it can accept React Components
as an argument to Surface#setContent.

##Getting Started
Use it as if it were a regular surface. 

    npm install react-surface;

    var surface = new ReactSurface({
      size: [100, 100],
      content: <LargeAd />,
    });

    //or 

    surface.setContent(<LargeAd model.attributes... />);
    
