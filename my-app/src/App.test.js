import React from 'react';
import App, {Form} from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Form />', () => {
  it('has 5 options', () => {
    const form = shallow(<Form />);
    expect(form.find('option').length).toBe(5);
  });

  it('has 1 textarea', () => {
    const form = shallow(<Form />);
    expect(form.find('textarea').length).toBe(1);
  });
});

describe('<App />', () => {
  it('renders', () => {
    const app = shallow(<App />);
    expect(app.find(Form).length).toBe(1);
  });

  it('has ul element', () => {
    const app = shallow(<App />);
    expect(app.find('ul').length).toBe(1);
  });
});