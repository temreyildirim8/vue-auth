import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import InputComp from '@/components/input/InputComp.vue'

describe('Input', () => {
  it('renders with default props', () => {
    const wrapper = mount(InputComp)
    const input = wrapper.find('input')

    expect(input.exists()).toBe(true)
    expect(input.attributes('type')).toBe('')
    expect(input.attributes('placeholder')).toBe('')
  })

  it('renders with custom props', () => {
    const wrapper = mount(InputComp, {
      propsData: {
        type: 'email',
        placeholder: 'Enter your email'
      }
    })
    const input = wrapper.find('input')

    expect(input.exists()).toBe(true)
    expect(input.attributes('type')).toBe('email')
    expect(input.attributes('placeholder')).toBe('Enter your email')
  })
})
