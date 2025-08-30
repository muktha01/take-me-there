var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "Click to view details",
    state_color: "#88A4BC",
    state_hover_color: "#000000",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "no", // Keep state zooming enabled
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "no", // Keep zoom enabled
    manual_zoom: "yes", // Keep manual zoom enabled
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "no",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no", // Open URLs in same tab for Next.js routing
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Details",
    popups: "detect"
  },
  state_specific: {
    INAN: {
      name: "Andaman and Nicobar",
      description: "Click to view Andaman and Nicobar details",
      color: "default",
      hover_color: "default",
      url: "/states/andaman-nicobar" // Add your route here
    },
    INAP: {
      name: "Andhra Pradesh",
      description: "Click to view Andhra Pradesh details",
      color: "default",
      hover_color: "default",
      url: "/states/andhra-pradesh"
    },
    INAR: {
      name: "Arunachal Pradesh",
      description: "Click to view Arunachal Pradesh details",
      color: "default",
      hover_color: "default",
      url: "/states/arunachal-pradesh"
    },
    INAS: {
      name: "Assam",
      description: "Click to view Assam details",
      color: "default",
      hover_color: "default",
      url: "/states/assam"
    },
    INBR: {
      name: "Bihar",
      description: "Click to view Bihar details",
      color: "default",
      hover_color: "default",
      url: "/states/bihar"
    },
    INCH: {
      name: "Chandigarh",
      description: "Click to view Chandigarh details",
      color: "default",
      hover_color: "default",
      url: "/states/chandigarh"
    },
    INCT: {
      name: "Chhattisgarh",
      description: "Click to view Chhattisgarh details",
      color: "default",
      hover_color: "default",
      url: "/states/chhattisgarh"
    },
    INDH: {
      name: "Dādra and Nagar Haveli and Damān and Diu",
      description: "Click to view Dadra and Nagar Haveli details",
      color: "default",
      hover_color: "default",
      url: "/states/dadra-nagar-haveli"
    },
    INDL: {
      name: "Delhi",
      description: "Click to view Delhi details",
      color: "default",
      hover_color: "default",
      url: "/states/delhi"
    },
    INGA: {
      name: "Goa",
      description: "Click to view Goa details",
      color: "default",
      hover_color: "default",
      url: "/states/goa"
    },
    INGJ: {
      name: "Gujarat",
      description: "Click to view Gujarat details",
      color: "default",
      hover_color: "default",
      url: "/states/gujarat"
    },
    INHP: {
      name: "Himachal Pradesh",
      description: "Click to view Himachal Pradesh details",
      color: "default",
      hover_color: "default",
      url: "/states/himachal-pradesh"
    },
    INHR: {
      name: "Haryana",
      description: "Click to view Haryana details",
      color: "default",
      hover_color: "default",
      url: "/states/haryana"
    },
    INJH: {
      name: "Jharkhand",
      description: "Click to view Jharkhand details",
      color: "default",
      hover_color: "default",
      url: "/states/jharkhand"
    },
    INJK: {
      name: "Jammu and Kashmir",
      description: "Click to view Jammu and Kashmir details",
      color: "default",
      hover_color: "default",
      url: "/states/jammu-kashmir"
    },
    INKA: {
      name: "Karnataka",
      description: "Click to view Karnataka details",
      color: "default",
      hover_color: "default",
      url: "/states/karnataka"
    },
    INKL: {
      name: "Kerala",
      description: "Click to view Kerala details",
      color: "default",
      hover_color: "default",
      url: "/states/kerala"
    },
    INLA: {
      name: "Ladakh",
      description: "Click to view Ladakh details",
      color: "default",
      hover_color: "default",
      url: "/states/ladakh"
    },
    INLD: {
      name: "Lakshadweep",
      description: "Click to view Lakshadweep details",
      color: "default",
      hover_color: "default",
      url: "/states/lakshadweep"
    },
    INMH: {
      name: "Maharashtra",
      description: "Click to view Maharashtra details",
      color: "default",
      hover_color: "default",
      url: "/states/maharashtra"
    },
    INML: {
      name: "Meghalaya",
      description: "Click to view Meghalaya details",
      color: "default",
      hover_color: "default",
      url: "/states/meghalaya"
    },
    INMN: {
      name: "Manipur",
      description: "Click to view Manipur details",
      color: "default",
      hover_color: "default",
      url: "/states/manipur"
    },
    INMP: {
      name: "Madhya Pradesh",
      description: "Click to view Madhya Pradesh details",
      color: "default",
      hover_color: "default",
      url: "/states/madhya-pradesh"
    },
    INMZ: {
      name: "Mizoram",
      description: "Click to view Mizoram details",
      color: "default",
      hover_color: "default",
      url: "/states/mizoram"
    },
    INNL: {
      name: "Nagaland",
      description: "Click to view Nagaland details",
      color: "default",
      hover_color: "default",
      url: "/states/nagaland"
    },
    INOR: {
      name: "Orissa",
      description: "Click to view Orissa details",
      color: "default",
      hover_color: "default",
      url: "/states/orissa"
    },
    INPB: {
      name: "Punjab",
      description: "Click to view Punjab details",
      color: "default",
      hover_color: "default",
      url: "/states/punjab"
    },
    INPY: {
      name: "Puducherry",
      description: "Click to view Puducherry details",
      color: "default",
      hover_color: "default",
      url: "/states/puducherry"
    },
    INRJ: {
      name: "Rajasthan",
      description: "Click to view Rajasthan details",
      color: "default",
      hover_color: "default",
      url: "/states/rajasthan"
    },
    INSK: {
      name: "Sikkim",
      description: "Click to view Sikkim details",
      color: "default",
      hover_color: "default",
      url: "/states/sikkim"
    },
    INTG: {
      name: "Telangana",
      description: "Click to view Telangana details",
      color: "default",
      hover_color: "default",
      url: "/states/telangana"
    },
    INTN: {
      name: "Tamil Nadu",
      description: "Click to view Tamil Nadu details",
      color: "default",
      hover_color: "default",
      url: "/states/tamil-nadu"
    },
    INTR: {
      name: "Tripura",
      description: "Click to view Tripura details",
      color: "default",
      hover_color: "default",
      url: "/states/tripura"
    },
    INUP: {
      name: "Uttar Pradesh",
      description: "Click to view Uttar Pradesh details",
      color: "default",
      hover_color: "default",
      url: "/states/uttar-pradesh"
    },
    INUT: {
      name: "Uttaranchal",
      description: "Click to view Uttaranchal details",
      color: "default",
      hover_color: "default",
      url: "/states/uttaranchal"
    },
    INWB: {
      name: "West Bengal",
      description: "Click to view West Bengal details",
      color: "default",
      hover_color: "default",
      url: "/states/west-bengal"
    }
  },
  locations: {
    "0": {
      name: "New Delhi",
      lat: "28.6",
      lng: "77.2"
    }
  },
  labels: {
    INAN: {
      name: "Andaman and Nicobar",
      parent_id: "INAN"
    },
    INAP: {
      name: "Andhra Pradesh",
      parent_id: "INAP"
    },
    INAR: {
      name: "Arunachal Pradesh",
      parent_id: "INAR"
    },
    INAS: {
      name: "Assam",
      parent_id: "INAS"
    },
    INBR: {
      name: "Bihar",
      parent_id: "INBR"
    },
    INCH: {
      name: "Chandigarh",
      parent_id: "INCH"
    },
    INCT: {
      name: "Chhattisgarh",
      parent_id: "INCT"
    },
    INDH: {
      name: "Dādra and Nagar Haveli and Damān and Diu",
      parent_id: "INDH"
    },
    INDL: {
      name: "Delhi",
      parent_id: "INDL"
    },
    INGA: {
      name: "Goa",
      parent_id: "INGA"
    },
    INGJ: {
      name: "Gujarat",
      parent_id: "INGJ"
    },
    INHP: {
      name: "Himachal Pradesh",
      parent_id: "INHP"
    },
    INHR: {
      name: "Haryana",
      parent_id: "INHR"
    },
    INJH: {
      name: "Jharkhand",
      parent_id: "INJH"
    },
    INJK: {
      name: "Jammu and Kashmir",
      parent_id: "INJK"
    },
    INKA: {
      name: "Karnataka",
      parent_id: "INKA"
    },
    INKL: {
      name: "Kerala",
      parent_id: "INKL"
    },
    INLA: {
      name: "Ladakh",
      parent_id: "INLA"
    },
    INLD: {
      name: "Lakshadweep",
      parent_id: "INLD"
    },
    INMH: {
      name: "Maharashtra",
      parent_id: "INMH"
    },
    INML: {
      name: "Meghalaya",
      parent_id: "INML"
    },
    INMN: {
      name: "Manipur",
      parent_id: "INMN"
    },
    INMP: {
      name: "Madhya Pradesh",
      parent_id: "INMP"
    },
    INMZ: {
      name: "Mizoram",
      parent_id: "INMZ"
    },
    INNL: {
      name: "Nagaland",
      parent_id: "INNL"
    },
    INOR: {
      name: "Orissa",
      description: "Click to view Orissa details",
      color: "default",
      hover_color: "default",
      url: "/states/orissa"
    },
    INPB: {
      name: "Punjab",
      description: "Click to view Punjab details",
      color: "default",
      hover_color: "default",
      url: "/states/punjab"
    },
    INPY: {
      name: "Puducherry",
      description: "Click to view Puducherry details",
      color: "default",
      hover_color: "default",
      url: "/states/puducherry"
    },
    INRJ: {
      name: "Rajasthan",
      description: "Click to view Rajasthan details",
      color: "default",
      hover_color: "default",
      url: "/states/rajasthan"
    },
    INSK: {
      name: "Sikkim",
      description: "Click to view Sikkim details",
      color: "default",
      hover_color: "default",
      url: "/states/sikkim"
    },
    INTG: {
      name: "Telangana",
      description: "Click to view Telangana details",
      color: "default",
      hover_color: "default",
      url: "/states/telangana"
    },
    INTN: {
      name: "Tamil Nadu",
      description: "Click to view Tamil Nadu details",
      color: "default",
      hover_color: "default",
      url: "/states/tamil-nadu"
    },
    INTR: {
      name: "Tripura",
      description: "Click to view Tripura details",
      color: "default",
      hover_color: "default",
      url: "/states/tripura"
    },
    INUP: {
      name: "Uttar Pradesh",
      description: "Click to view Uttar Pradesh details",
      color: "default",
      hover_color: "default",
      url: "/states/uttar-pradesh"
    },
    INUT: {
      name: "Uttaranchal",
      description: "Click to view Uttaranchal details",
      color: "default",
      hover_color: "default",
      url: "/states/uttaranchal"
    },
    INWB: {
      name: "West Bengal",
      description: "Click to view West Bengal details",
      color: "default",
      hover_color: "default",
      url: "/states/west-bengal"
    }
  },
  locations: {
    "0": {
      name: "New Delhi",
      lat: "28.6",
      lng: "77.2"
    }
  },
  labels: {
    INAN: {
      name: "Andaman and Nicobar",
      parent_id: "INAN"
    },
    INAP: {
      name: "Andhra Pradesh",
      parent_id: "INAP"
    },
    INAR: {
      name: "Arunachal Pradesh",
      parent_id: "INAR"
    },
    INAS: {
      name: "Assam",
      parent_id: "INAS"
    },
    INBR: {
      name: "Bihar",
      parent_id: "INBR"
    },
    INCH: {
      name: "Chandigarh",
      parent_id: "INCH"
    },
    INCT: {
      name: "Chhattisgarh",
      parent_id: "INCT"
    },
    INDH: {
      name: "Dādra and Nagar Haveli and Damān and Diu",
      parent_id: "INDH"
    },
    INDL: {
      name: "Delhi",
      parent_id: "INDL"
    },
    INGA: {
      name: "Goa",
      parent_id: "INGA"
    },
    INGJ: {
      name: "Gujarat",
      parent_id: "INGJ"
    },
    INHP: {
      name: "Himachal Pradesh",
      parent_id: "INHP"
    },
    INHR: {
      name: "Haryana",
      parent_id: "INHR"
    },
    INJH: {
      name: "Jharkhand",
      parent_id: "INJH"
    },
    INJK: {
      name: "Jammu and Kashmir",
      parent_id: "INJK"
    },
    INKA: {
      name: "Karnataka",
      parent_id: "INKA"
    },
    INKL: {
      name: "Kerala",
      parent_id: "INKL"
    },
    INLA: {
      name: "Ladakh",
      parent_id: "INLA"
    },
    INLD: {
      name: "Lakshadweep",
      parent_id: "INLD"
    },
    INMH: {
      name: "Maharashtra",
      parent_id: "INMH"
    },
    INML: {
      name: "Meghalaya",
      parent_id: "INML"
    },
    INMN: {
      name: "Manipur",
      parent_id: "INMN"
    },
    INMP: {
      name: "Madhya Pradesh",
      parent_id: "INMP"
    },
    INMZ: {
      name: "Mizoram",
      parent_id: "INMZ"
    },
    INNL: {
      name: "Nagaland",
      parent_id: "INNL"
    },
    INOR: {
      name: "Orissa",
      parent_id: "INOR"
    },
    INPB: {
      name: "Punjab",
      parent_id: "INPB"
    },
    INPY: {
      name: "Puducherry",
      parent_id: "INPY"
    },
    INRJ: {
      name: "Rajasthan",
      parent_id: "INRJ"
    },
    INSK: {
      name: "Sikkim",
      parent_id: "INSK"
    },
    INTG: {
      name: "Telangana",
      parent_id: "INTG"
    },
    INTN: {
      name: "Tamil Nadu",
      parent_id: "INTN"
    },
    INTR: {
      name: "Tripura",
      parent_id: "INTR"
    },
    INUP: {
      name: "Uttar Pradesh",
      parent_id: "INUP"
    },
    INUT: {
      name: "Uttaranchal",
      parent_id: "INUT"
    },
    INWB: {
      name: "West Bengal",
      parent_id: "INWB"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};