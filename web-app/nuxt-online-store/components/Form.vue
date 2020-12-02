<template>
  <form class="form" @submit.prevent="onSubmit">
    <input
      ref="name"
      name="name"
      class="form__input form__field"
      type="text"
      placeholder="Ваше имя"
      @input="onValidateTextInput"
    />
    <input
      ref="phoneNumber"
      name="phone-number"
      class="form__input form__field"
      type="tel"
      placeholder="Телефон"
      @input="onValidateNumberInput"
      @focus="onValidateNumberInput"
      @blur="onValidateNumberInput"
    />
    <input
      ref="address"
      name="address"
      class="form__input form__field"
      type="text"
      placeholder="Адрес"
      @input="onValidateTextInput"
    />
    <button class="form__btn cart__btn" type="submit">Отправить</button>
  </form>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      name: '',
      phoneNumber: '',
      address: '',
    };
  },
  methods: {
    setCursorPosition(pos, elem) {
      elem.focus();

      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        const range = elem.createTextRange();

        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    },
    onValidateTextInput(e) {
      e.target.value = e.target.value.replace(/\d/g, '');
    },
    onValidateNumberInput(e) {
      const matrix = '+7 ___ ___-__-__';
      let i = 0;
      const def = matrix.replace(/\D/g, '');
      let val = e.target.value.replace(/\D/g, '');

      if (def.length >= val.length) {
        val = def;
      }

      e.target.value = matrix.replace(/./g, (a) => {
        return /[_\d]/.test(a) && i < val.length
          ? val.charAt(i++)
          : i >= val.length
          ? ''
          : a;
      });

      if (e.type === 'blur') {
        if (e.target.value.length === 2) {
          e.target.value = '';
        }
      } else {
        this.setCursorPosition(e.target.value.length, e.target);
      }
    },
    onSubmit(e) {
      const name = this.$refs.name;
      const phoneNumber = this.$refs.phoneNumber;
      const address = this.$refs.address;

      const obj = {
        name: name.value,
        phoneNumber: phoneNumber.value,
        address: address.value,
      };

      this.$store.dispatch('form/addToUserData', JSON.stringify(obj));
      this.$store.dispatch('cart/setItems', []);

      name.value = '';
      phoneNumber.value = '';
      address.value = '';
    },
  },
};
</script>

<style lang="scss">
.form {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__field {
    &::placeholder {
      @include pt-regular;
      font-size: 16px;
      line-height: 21px;
      color: $lightGray;
    }
  }
  &__input {
    padding: 14px 14px 15px 14px;
    width: 100%;
    background-color: #f8f8f8;
    border-radius: 8px;
    border: none;
    outline: none;
    font-size: 18px;
    &:not(:first-child) {
      margin-top: 16px;
    }
  }
  &__btn {
    border: none;
    outline: none;
    cursor: pointer;
  }
}
</style>
