import { shallowMount } from "@vue/test-utils";
import TheFooter from "@/components/global/TheFooter";

describe("HelloWorld.vue", () => {
  it("renders my contact information", () => {
    const email = "chris@chrisdaviesweb.com";
    const wrapper = shallowMount(TheFooter);

    expect(wrapper.find(".email").text()).toBe(email);
  });
});
