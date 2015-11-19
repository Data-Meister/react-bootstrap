import React from 'react';
import tsp from 'teaspoon';

import Nav from '../src/Nav';
import NavItem from '../src/NavItem';
import TabPane from '../src/TabPane';
import TabContent from '../src/TabContent';
import TabContainer from '../src/TabContainer';

let s = tsp.selector;

describe('TabPane', () => {

  it('Should stop TabContainer context from propagating', () => {
    let instance = tsp(
      <TabContainer id="custom-id">
        <div>
          <Nav>
            <NavItem eventKey='1'>One</NavItem>
          </Nav>
          <TabContent>
            <TabPane eventKey='1'>
              <Nav>
                <NavItem eventKey='2'>One</NavItem>
              </Nav>
            </TabPane>
          </TabContent>
        </div>
      </TabContainer>
    ).render();

    let top = instance
      .find(s`div > ${Nav}`)
      .context('$bs_tabcontainer');

    let nested = instance
      .find(s`${TabPane} ${Nav}`)
      .context('$bs_tabcontainer');

    expect(top).to.exist;
    expect(nested).to.not.exist;
  });

});
