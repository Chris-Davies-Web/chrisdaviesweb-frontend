import { mount } from "@vue/test-utils";
import TheWork from "@/components/views/TheWork";
import TheHeader from "@/components/global/TheHeader";

describe("TheWork.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(TheWork, {
      slots: {
        menu: TheHeader,
      },
    });
  });

  it("renders a menu", () => {
    expect(wrapper.find(".the-header").exists()).toBe(true);
  });

  it("renders a h1 tag", () => {
    expect(wrapper.find("h1").exists()).toBe(true);
  });

  it("renders project tiles", () => {
    expect(wrapper.find(".project").exists()).toBe(true);
  });
});
