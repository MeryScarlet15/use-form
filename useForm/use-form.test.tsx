import React from "react";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

interface UseFormWrapperProps {
  hook?: any;
}

const UseFormWrapper: React.FC<UseFormWrapperProps> = (props: UseFormWrapperProps) => {
  const { hook } = props;

  return <div></div>;
};

describe("useForm", () => {
  it("should render", () => {
    const wrapper = shallow(<UseFormWrapper />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
