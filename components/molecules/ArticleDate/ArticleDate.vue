<template>
  <div>
    <div class="article-date">
      <base-img
        size="sm"
        :img-url="require('@/assets/img/icon/date.svg')"
        img-alt="日付"
      />
      <base-text>
        作成日:{{ formatDate(createdAt) }} ~ 更新日:{{ formatDate(updatedAt) }}
      </base-text>
    </div>
  </div>
</template>

<script>
import BaseImg from '../../atoms/BaseImg/BaseImg';
import BaseText from '../../atoms/BaseText/BaseText';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
dayjs.locale('ja');

export default {
  name: 'ArticleDate',
  components: {
    BaseImg,
    BaseText
  },
  props: {
    /**
     * 記事の作成日
     */
    createdAt: {
      type: String,
      required: true
    },
    /**
     * 記事の更新日
     */
    updatedAt: {
      type: String,
      required: true
    }
  },
  methods: {
    formatDate(date = null) {
      if (date == null) return '--/--/--';
      return dayjs(date).format('YYYY/M/D');
    }
  }
};
</script>

<style scoped>
::v-deep .base-text--extend {
  color: rgb(40, 167, 69);
}

.article-date {
  display: flex;
  margin: 0;
}
</style>
