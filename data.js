var APP_DATA = {
  "scenes": [
    {
      "id": "0-view-point",
      "name": "VIEW POINT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 3.1159464969909854,
        "pitch": -0.3040874209675284,
        "fov": 1.530658530752525
      },
      "linkHotspots": [
        {
          "yaw": -0.7796533059455086,
          "pitch": -0.0008438588413977044,
          "rotation": 6.283185307179586,
          "target": "6-energy-park"
        },
        {
          "yaw": 2.6509665527484305,
          "pitch": -0.0018810701147558007,
          "rotation": 0,
          "target": "1-f_block-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-f_block-entrance",
      "name": "F_BLOCK ENTRANCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8738000059660926,
          "pitch": 0.013767476714805937,
          "rotation": 0,
          "target": "2-ground-floor"
        },
        {
          "yaw": -0.3388970847976118,
          "pitch": 0.02082175752176063,
          "rotation": 0,
          "target": "0-view-point"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ground-floor",
      "name": "GROUND FLOOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9098144135708992,
          "pitch": 0.09292820707464777,
          "rotation": 0,
          "target": "3-first-floor"
        },
        {
          "yaw": 0.09410329887487201,
          "pitch": -0.018658974909991244,
          "rotation": 0,
          "target": "1-f_block-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-first-floor",
      "name": "FIRST FLOOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3455204747095326,
          "pitch": -0.0481233497706679,
          "rotation": 0,
          "target": "4-second-floor"
        },
        {
          "yaw": 0.5939461732370965,
          "pitch": 0.16290902353912529,
          "rotation": 0,
          "target": "2-ground-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-second-floor",
      "name": "SECOND FLOOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5050386414175989,
          "pitch": -0.017651429959386178,
          "rotation": 0,
          "target": "5-third-floor"
        },
        {
          "yaw": 1.521478821177479,
          "pitch": 0.29314541187477516,
          "rotation": 0,
          "target": "3-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-third-floor",
      "name": "THIRD FLOOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9626705830264157,
          "pitch": 0.2229240426052428,
          "rotation": 0,
          "target": "4-second-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-energy-park",
      "name": "ENERGY PARK",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.17056287775113432,
          "pitch": 0.0709507885781342,
          "rotation": 0,
          "target": "7-c_block-entrance"
        },
        {
          "yaw": 1.9395240817480195,
          "pitch": 0.055821483965981855,
          "rotation": 0,
          "target": "0-view-point"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-c_block-entrance",
      "name": "C_BLOCK ENTRANCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
