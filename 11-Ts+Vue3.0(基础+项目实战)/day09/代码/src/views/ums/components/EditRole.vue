<!-- 编辑角色 -->
<template>
  <el-dialog v-model="visible" title="Shipping address" :before-close="close">
    <el-form :model="form">
      <el-form-item>
        <el-select multiple v-model="roles" placeholder="Please select a zone">
          <el-option v-for="role in form.roleLists" :label="role.name" :value="role.id" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="updateRole">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref, watch } from 'vue'
import { updateAdminRole } from '../../../request/api'

const roles = ref<number[]>([]);

const props = defineProps<{
  visible: boolean;
  form: AdminRoleFormData
}>();

const emits = defineEmits<{
  (event: 'close'): void;
}>();

watch(() => props.form.userRoles, () => {
  roles.value = props.form.userRoles.map(item => item.id);
})

const close = () => {
  emits('close');
};
const updateRole = () => {
  updateAdminRole({ adminId: props.form.adminId, roleIds: roles.value.join(',') }).then(res => {
    if (res.code === 200) {
      close();
    }
  })
}

</script>
<style lang='less' scoped>
</style>