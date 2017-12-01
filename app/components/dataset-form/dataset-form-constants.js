export const schema = {
  title: 'Create dataset',
  type: 'object',
  required: ['environment', 'title', 'type', 'provider'],
  properties: {
    env: {
      type: 'string',
      title: 'Environment',
      default: 'prepproduction',
      enum: ['prepproduction', 'production']
    },
    published: {
      type: 'boolean',
      title: 'Published',
      description: 'Do you want to set this dataset as published?',
      default: true
    },
    title: {
      type: 'string',
      title: 'Title',
      minLength: 3
    },
    subtitle: {
      type: 'string',
      title: 'Subtitle'
    },
    type: {
      type: 'string',
      title: 'Type',
      description: 'Replace with DOM!',
      default: 'tabular',
      enum: ['tabular', 'raster'],
      enumNames: ['Tabular', 'Raster']
    },
    geo: {
      type: 'boolean',
      title: 'Yes',
      description: 'Does this dataset contain geographical features such as points, polygons or lines?'
    },
    provider: {
      type: 'string',
      title: 'Provider',
      enum: ['cartodb', 'gee', 'featureservice', 'nexgddp', 'json', 'csv', 'tsv', 'xml', 'wms'],
      enumNames: ['Carto', 'Google Earth Engine', 'Argics Feature Service', 'NexGDDP', 'JSON',
        'CSV', 'TSV', 'XML', 'WMS']
    }
  },
  dependencies: {
    provider: {
      oneOf: [
        {
          properties: {
            provider: {
              enum: ['cartodb']
            },
            cartoAccountName: {
              type: 'string',
              title: 'Carto account username',
              minLength: 2
            },
            cartoTableName: {
              type: 'string',
              title: 'Table name',
              minLength: 2
            }
          },
          required: ['cartoAccountName', 'cartoTableName']
        },
        {
          properties: {
            provider: {
              enum: ['gee']
            },
            geeTableName: {
              type: 'string',
              title: 'Table name',
              description: 'Please add fusion table (ft:id) or an image. Example: projects/wri-datalab/HansenComposite_14-15',
              minLength: 2
            }
          },
          required: ['geeTableName']
        },
        {
          properties: {
            provider: {
              enum: ['nexgddp']
            },
            nexgddpTableName: {
              type: 'string',
              title: 'Table name',
              description: 'Please verify that the scenario and model is already incorporated in Rasdaman. Example: scenario/model',
              minLength: 2
            }
          },
          required: ['nexgddpTableName']
        },
        {
          properties: {
            provider: {
              enum: ['featureservice']
            },
            featureServiceUrlDataEndpoint: {
              type: 'string',
              title: 'Url data endpoint',
              description: 'Example: http://gis-gfw.wri.org/arcgis/rest/services/prep/nex_gddp_indicators/MapServer/6?f=pjson'
            }
          },
          required: ['featureServiceUrlDataEndpoint']
        },
        {
          properties: {
            provider: {
              enum: ['csv']
            },
            csvVerified: {
              type: 'boolean',
              title: 'Verified',
              description: 'Is this dataset verified?',
              default: false
            },
            connectorUrl: {
              type: 'string',
              title: 'Url data endpoint / File'
            }
          },
          required: ['connectorUrl']
        },
        {
          properties: {
            provider: {
              enum: ['json']
            },
            jsonVerified: {
              type: 'boolean',
              title: 'Verified',
              description: 'Is this dataset verified?',
              default: false
            },
            connectorUrl: {
              type: 'string',
              format: 'uri',
              title: 'Url data endpoint / File'
            },
            dataPath: {
              type: 'string',
              title: 'Data path',
              description: 'Name of the element that you want to import',
              minLength: 2
            }
          },
          required: ['connectorUrl']
        },
        {
          properties: {
            provider: {
              enum: ['tsv']
            },
            tsvVerified: {
              type: 'boolean',
              title: 'Verified',
              description: 'Is this dataset verified?',
              default: false
            },
            connectorUrl: {
              type: 'string',
              format: 'uri',
              title: 'Url data endpoint / File'
            }
          },
          required: ['connectorUrl']
        },
        {
          properties: {
            provider: {
              enum: ['xml']
            },
            xmlVerified: {
              type: 'boolean',
              title: 'Verified',
              description: 'Is this dataset verified?',
              default: false
            },
            connectorUrl: {
              type: 'string',
              title: 'Url data endpoint / File'
            },
            dataPath: {
              type: 'string',
              title: 'Data path',
              description: 'Name of the element that you want to import',
              minLength: 2
            }
          },
          required: ['connectorUrl', 'dataPath']
        },
        {
          properties: {
            provider: {
              enum: ['wms']
            },
            connectorUrl: {
              type: 'string',
              title: 'Url data endpoint / File',
              description: 'This connector will only display the data as a wms map layer. The data will not be available through queries.'
            }
          },
          required: ['connectorUrl']
        }
      ]
    }
  }
};


export const uiSchema = {
  env: {
    'ui:help': 'Choose "preproduction" to see this dataset it only as admin, "production" option will show it in public site.'
  },
  type: {
    'ui:widget': 'select'
  },
  connectorUrl: {
    'ui:widget': 'customFileInput',
    'ui:options': {
      inputType: 'url'
    }
  }
};
