import Vue from 'vue'
import Hello from '@/components/Hello'

describe('Hello.vue', () => {
  let vm

  beforeEach(function () {
    const Constructor = Vue.extend(Hello)
    vm = new Constructor().$mount()
  })

  it('should check that msg is Welcome to Your Vue.js App', () => {
    expect(vm.$data.msg).to.equal('Welcome to Your Vue.js App')
  })

  it('should render correct contents', () => {
    const data = {
      data: {
        msg: 'plop'
      }
    }
    const Constructor = Vue.extend(Hello)
    vm = new Constructor(data).$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('plop')
  })

})
