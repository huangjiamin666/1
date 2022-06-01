// <script>
// import { Vue, Component, Emit } from 'vue-property-decorator';

// @Component({})
// export default class Child extends Vue {
//   mounted () {
//     this.$on('emit-todo', function (n) {
//       console.log(n)
//     })

//     this.emitTodo('world');
//   }

//   @Emit()
//   emitTodo (n) {
//     console.log('hello');
//   }
// }
// // 运行上面的代码会打印 'hello' 'world',
//
</script>

<script lang="ts">
// 2. 如果我们想触发特定的事件呢,比如在emitTodo下触发reset事件:
// 我们只需要给装饰器@Emit传递一个事件名参数reset,这样函数emitTodo运行之后就会触发reset事件.
//   import {Vue, Component, Emit} from 'vue-property-decorator';

//   @Component({})
//   export default class "组件名" extends Vue{

//     @Emit('reset')
//     emitTodo(n: string){

//     }
//   }
//
</script>







@Emit触发事件有两种写法

@Emit()不传参数,那么它触发的事件名就是它所修饰的函数名.
@Emit(name: string),里面传递一个字符串,该字符串为要触发的事件名.