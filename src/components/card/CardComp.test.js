import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import CardComp from '@/components/card/CardComp.vue'

describe('Card', () => {
  it('renders the slot content', () => {
    const wrapper = mount(CardComp, {
      slots: {
        default: '<p>Test content</p>'
      }
    })

    expect(wrapper.find('p').text()).toBe('Test content')
  })
})
