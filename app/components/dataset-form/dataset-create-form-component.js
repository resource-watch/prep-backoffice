import React from 'react';
import Form from 'react-jsonschema-form';

// import customTypeField from 'components/dataset-form/custom/type-field-description';

const schema = {
  title: 'Create dataset',
  type: 'object',
  required: ['environment', 'title', 'type', 'provider'],
  properties: {
    environment: {
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
      description: 'Does this dataset contain geographical features such as points, polygons or lines?',
      default: false
    },
    provider: {
      type: 'string',
      title: 'Provider',
      default: 'cartodb',
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
            csvDataEndpoint: {
              type: 'string',
              title: 'Url data endpoint / File'
            }
          },
          required: ['csvDataEndpoint']
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
            jsonDataEndpoint: {
              type: 'string',
              title: 'Url data endpoint / File'
            },
            jsonDataPath: {
              type: 'string',
              title: 'Data path',
              description: 'Name of the element that you want to import',
              minLength: 2
            }
          },
          required: ['jsonDataEndpoint']
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
            tsvDataEndpoint: {
              type: 'string',
              title: 'Url data endpoint / File'
            }
          },
          required: ['tsvDataEndpoint']
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
            xmlDataEndpoint: {
              type: 'string',
              title: 'Url data endpoint / File'
            },
            xmlDataPath: {
              type: 'string',
              title: 'Data path',
              description: 'Name of the element that you want to import',
              minLength: 2
            }
          },
          required: ['xmlDataEndpoint', 'xmlDataPath']
        },
        {
          properties: {
            provider: {
              enum: ['wms']
            },
            xmlDataEndpoint: {
              type: 'string',
              title: 'Url data endpoint / File',
              description: 'This connector will only display the data as a wms map layer. The data will not be available through queries.'
            }
          },
          required: ['xmlDataEndpoint']
        }
      ]
    }
  }
};

const uiSchema = {
  environment: {
    'ui:help': 'Choose "preproduction" to see this dataset it only as admin, "production" option will show it in public site.'
  },
  type: {
    'ui:widget': 'select'
  },
  featureServiceUrlDataEndpoint: {
    'ui:options': {
      inputType: 'url'
    }
  }
};

export default class DatasetCreateForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(formData) {
    console.log(formData);
  }

  render() {
    return (
      <Form
        schema={schema}
        uiSchema={uiSchema}
        noHtml5Validate
        onSubmit={this.onSubmit}
      />
    );
  }
}
