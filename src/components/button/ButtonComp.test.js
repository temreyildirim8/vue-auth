import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ButtonComp from '@/components/button/ButtonComp.vue'

describe('Button', () => {
  it('renders with default props', () => {
    const wrapper = mount(ButtonComp)
    const button = wrapper.find('button')

    expect(button.exists()).toBe(true)
    expect(button.attributes('style')).toBe(
      'background-color: rgb(139, 166, 49); color: rgb(255, 255, 255);'
    )
  })

  it('renders with custom props', () => {
    const wrapper = mount(ButtonComp, {
      propsData: {
        bgColor: 'rgb(255, 0, 0)',
        textColor: 'rgb(255, 255, 255)'
      }
    })
    const button = wrapper.find('button')

    expect(button.exists()).toBe(true)
    expect(button.attributes('style')).toBe(
      'background-color: rgb(255, 0, 0); color: rgb(255, 255, 255);'
    )
  })
})
