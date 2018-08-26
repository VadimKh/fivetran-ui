import * as React from 'react';
import Menu from './components/Menu';
import './scss/Main.scss';

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      isMenuOpened: false
    };
  }

  public render() {
    return (
      <>
        <Menu
          items={[
            {
              subItems: [
                {
                  link: '#',
                  title: 'Applications',
                },
                {
                  link: '#',
                  title: 'Databases',
                },
                {
                  isActive: true,
                  link: '#',
                  title: 'Events',
                },
                {
                  isNew: true,
                  link: '#',
                  title: 'Files',
                }
              ],
              title: 'Connectors',
            },
            {
              link: '#',
              title: 'Features',
            },
            {
              link: '#',
              title: 'Documentation',
            },
            {
              link: '#',
              title: 'Resources',
            }
          ]}
          breadcrumbs={[
            {title: 'Home', link: '#'},
            {title: 'Connectors', link: '#'},
            {title: 'Events'}
          ]}
        />

        <div className="section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 order-md-2 align-self-center section-image">
                <div className="row justify-content-around">
                  <div className="col-md-8 col-lg-8">
                    <div className="avatar full-width shadow-5 primary">
                      <div className="avatar-content">Content</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 align-self-center">
                <div className="block">
                  <div className="block-preheader">Preheader</div>
                  <div className="block-header">
                    <h1>Header 1</h1>
                    <div className="block-subheader">Subheader</div>
                  </div>
                  <div className="block-content">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </div>
                  <div className="block-footer">
                    <button className="btn block-button">Free trial</button>
                    <button className="btn block-button light">Free trial</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h1>Header 1</h1>
              <h2>Header 2</h2>
              <h3>Header 3</h3>
              <h4>Header 4</h4>
              <h5>Header 5</h5>
              <h6>Header 6</h6>
              <br/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="block">
                <div className="block-preheader">Preheader</div>
                <div className="block-header">
                  <h1>Header 1</h1>
                  <div className="block-subheader">Subheader</div>
                </div>
                <div className="block-content">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="block">
                <div className="block-preheader">Preheader</div>
                <div className="block-header">
                  <h1>Header 1</h1>
                  <div className="block-subheader">Subheader</div>
                </div>
                <div className="block-content">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <button className="btn block-button">Free trial</button>
              </div>
            </div>
            <div className="col-6">
              <div className="block">
                <div className="block-preheader">Preheader</div>
                <div className="block-header">
                  <h1>Header 1</h1>
                </div>
                <div className="block-content">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <button className="btn block-button">Free trial</button>
              </div>
            </div>
            <div className="col-6">
              <div className="block">
                <div className="block-header">
                  <h2>Header 2</h2>
                  <div className="block-subheader">Subheader</div>
                </div>
                <div className="block-content">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <button className="btn block-button">Free trial</button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-image"/>
                <div className="card-body">
                  <div className="block">
                    <div className="block-preheader">Applications</div>
                    <div className="block-header secondary">
                      <h2>SaSS Explosion</h2>
                    </div>
                    <div className="block-content">
                      <p className="sm">Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="btn">Free Trial</div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-image"/>
                <div className="card-body">
                  <div className="block">
                    <div className="block-preheader">Applications</div>
                    <div className="block-header secondary">
                      <h2>SaSS Explosion</h2>
                    </div>
                    <div className="block-content">
                      <p className="sm">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas faucibus mollis interdum. Curabitur blandit tempus porttitor.</p>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="btn">Free Trial</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <div className="btn">
                button
                <div className="badge btn-badge">badge</div>
              </div>
            </div>

            <div className="col-2">
              <div className="btn light">
                button
                <div className="badge btn-badge primary">badge</div>
              </div>
            </div>

            <div className="col-2">
              <div className="badge-container">
                <a href="#"></a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
