import { createLocalVue, mount } from '@vue/test-utils'
import NuxtLogo from '@/components/NuxtLogo.vue'

const localVue = createLocalVue()

describe('NuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NuxtLogo, {
      localVue,
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
