import { withRouter } from 'next/router';
import React, { Component } from 'react';
import Head from 'next/head';
import '../static/bootstrap.min.css';
import '../static/style.css';
import Popup from '../components/Popup';  
import Slides from '../components/Slides';
import Tooltip from '../components/Tooltip';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isPopActive: false,
      slideInterval: 3000,
      clickedSlide: ''
     };
    this.onSlideClick = this.onSlideClick.bind(this);
    this.activatePop = this.activatePop.bind(this);
  }
  componentDidMount(){
    

    /* Adaptive layout using Grid and percentages/fractions */
    var cont = document.querySelector('#container');
    var images = document.querySelectorAll('.images');
    function windowChange(){
      //document.body.id = 'theBody';
      var currentWidth = window.innerWidth;
      var currentHeight = window.innerHeight;
      var maxWidth = 1280;
      var minWidth = 360;
      var maxHeight = 732;
      var minHeight = 560; 
      var widthRange = maxWidth - minWidth;
      var heightRange = maxHeight - minHeight;
      var sideRange = 17;
      var topRange = 5;
      var bottomRange = 12;
      var midRange = 18;
      var sideFactor = widthRange / sideRange;
      var topFactor = heightRange / topRange;
      var midFactor = heightRange / midRange;
      var bottomFactor = heightRange / bottomRange;
      var sidePercent = (maxWidth - currentWidth)/sideFactor;
      var topPercent = (maxHeight - currentHeight)/topFactor;
      var midPercent = (maxHeight - currentHeight)/midFactor;
      var bottomPercent = (maxHeight - currentHeight)/bottomFactor;
      //side spaces go from 17% to 0%
      cont.style.gridTemplateColumns = 
        `${(17-sidePercent).toFixed(1)}fr 
         66fr 
         ${(17-sidePercent).toFixed(1)}fr`
      //top and bottom go to 25%, midHeight(video) takes remaining 50%
      //midwidth is irrelevant since both sides have 0%
      cont.style.gridTemplateRows = 
        `${(20+topPercent).toFixed(1)}fr 
         ${(68-midPercent).toFixed(1)}fr 
         ${(12+bottomPercent).toFixed(1)}fr`
      //all images height has to match mid% 
      images.forEach(img => {
        img.style.height = `${(69-midPercent)}vh`  
      });
    }
    window.onload = ()=> {
      windowChange()
    }
    window.onresize = ()=>{
      windowChange()
    }
    /*WebGL module */
    if ( WEBGL.isWebGLAvailable() === false ) {
      document.body.appendChild( WEBGL.getWebGLErrorMessage() );
    }
    var container, controls;
    var camera, scene, renderer, light;
    init();
    animate();
    function init() {
      container = document.createElement( 'div' );
      var linkCont = document.body
      linkCont.appendChild( container );
      camera = new THREE.PerspectiveCamera( 47, window.innerWidth / window.innerHeight, 0.25, 100 );
      camera.position.set( 0, 0, 10 );
      controls = new THREE.OrbitControls( camera );
      controls.target.set( 0, .5, 1 );
      controls.update();
      var urls = [ '' ];
      var loader = new THREE.CubeTextureLoader().setPath( 'static/3dmodel/' );
      var background = loader.load( urls );
      scene = new THREE.Scene();
      scene.background = new THREE.Color("rgb(255, 255, 255)");
      light = new THREE.HemisphereLight( 0xbbbbff, 0x444422 );
      light.position.set( 0, 1, 0 );
      scene.add( light );
      // model
      var loader = new THREE.GLTFLoader().setPath( 'static/3dmodel/' );
      loader.load( 'cubes.gltf', function ( gltf ) {
        gltf.scene.traverse( function ( child ) {
          if ( child.isMesh ) {
            child.material.envMap = background;
          }
        } );
        scene.add( gltf.scene );
        var directionalLight = new THREE.DirectionalLight( 0xffffff, .6 );
        scene.add( directionalLight );

      }, undefined, function ( e ) {
        console.error( e );
      } );
      renderer = new THREE.WebGLRenderer( { antialias: true } );
      renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setSize( window.innerWidth,window.innerHeight );
      renderer.gammaOutput = true;
      container.appendChild( renderer.domElement );
      window.addEventListener( 'resize', onWindowResize, false );
      
    }
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
    }
    //
    function animate() {
      requestAnimationFrame( animate );
      renderer.render( scene, camera );
      
    }
    
  }
  onSlideClick(id) {
    setTimeout(()=>{
      var theIfr = document.querySelector('#ifr');
      console.log(theIfr)  
      if(theIfr){
        theIfr.style.backgroundImage = `url(static/gifs/loading2.gif?r=${new Date().getTime()})`
      }
    },1000)
    
    this.setState({ 
      isPopActive: !this.state.isPopActive,
      slideInterval: false,
      clickedSlide: id
    })
  }
  activatePop(event) {
    
    this.setState({ 
      isPopActive: !this.state.isPopActive,
      slideInterval: 3000
    })
  }

  render() {
    return (
      <div id="container">  
        <Head>
          <title>Portfolio</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" 
          />
          <script src="static/3dmodel/three.js"></script>
          <script src="static/3dmodel/OrbitControls.js"></script>
          <script src="static/3dmodel/GLTFLoader.js"></script>
          <script src="static/3dmodel/WebGL.js"></script>
        </Head>
        {/* <p>{this.props.router.query.or}</p> */}
        {/* <div id='theBody'></div> */}
        
        <Slides 
          onSlideClick={this.onSlideClick} 
          interval={this.state.slideInterval} 
          order={this.props.router.query.or}/>
        <Popup 
          activatePop={this.activatePop} 
          isActive={this.state.isPopActive} 
          content={this.state.clickedSlide}/>
          <div id="top">
          <Tooltip 
            text={'Drag or scroll this background'}
            position={'left'}
            current={'top'}/>
          </div>
          <div id="left">
            <Tooltip 
              text={'Drag or scroll this background'}
              position={'bottom'}
              current={'left'}/>
          </div>
          <div id="right">
            <Tooltip 
              text={'Drag or scroll this background'}
              position={'bottom'}
              current={'right'}/> 
          </div>
          <div id="bottom"></div>

      </div>

    )
  }
}


const Extract = withRouter(Index)

export default Extract;

