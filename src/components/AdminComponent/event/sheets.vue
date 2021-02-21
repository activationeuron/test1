<template>
  <table class="table-cell border-separate my-10 ">
    <thead>
      <tr class="space-x-3 ">
        <th class="w-1/3 ...">Level 05 (Born Year 2010)</th>
        <th>Points</th>
        <th>...</th>
        <th>Indufficent Split</th>

        <th>Off Balance</th>

        <th>Leg Bent</th>
        <th>InProper Body Position</th>
        <th>Aristy</th>
        <th>Landing</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-gray-100 text-center">
        <td>Any Mount</td>
        <td class="cursor-pointer" @click="addToD(1)">1.0</td>
        <td>..</td>
        <td @click="calcE(0.1)">0.1</td>
        <td @click="calcE(0.1)">0.1</td>

        <td @click="calcE(0.05)">0.05</td>

        <td @click="calcE(0.1)">0.10</td>
        <td @click="calcE(0.05)">0.05</td>
        <td @click="calcE(0.01)">0.01</td>
      </tr>
      <!-- secons -->
      <tr class="bg-gray-200 text-center">
        <td>Toe turn 360</td>
        <td @click="addToD(2)">2.0</td>
        <td>..</td>
        <td @click="calcE(0.1)">0.1</td>
        <td @click="calcE(0.1)">0.1</td>

        <td @click="calcE(0.05)">0.05</td>

        <td @click="calcE(0.1)">0.10</td>
        <td @click="calcE(0.05)">0.05</td>
        <td @click="calcE(0.01)">0.01</td>
      </tr>
      <!-- thired -->
      <tr class="bg-gray-100 text-center">
        <td>Split Leap to any jump</td>
        <td @click="addToD(1.5)">1.50</td>
        <td>..</td>
        <td @click="calcE(0.1)">0.1</td>
        <td @click="calcE(0.1)">0.1</td>

        <td @click="calcE(0.05)">0.05</td>

        <td @click="calcE(0.1)">0.10</td>
        <td @click="calcE(0.05)">0.05</td>
        <td @click="calcE(0.01)">0.01</td>
      </tr>
      <!-- gour-->
      <tr class="bg-gray-200 text-center">
        <td>Backwalkover</td>
        <td @click="addToD(2)">2.0</td>
        <td>..</td>
        <td @click="calcE(0.1)">0.1</td>
        <td @click="calcE(0.1)">0.1</td>

        <td @click="calcE(0.05)">0.05</td>

        <td @click="calcE(0.1)">0.10</td>
        <td @click="calcE(0.05)">0.05</td>
        <td @click="calcE(0.01)">0.01</td>
      </tr>
      <!-- five -->
      <tr class="bg-gray-100 text-center">
        <td>Split Jumo 2</td>
        <td @click="addToD(1.5)">1.50</td>
        <td>..</td>
        <td @click="calcE(0.1)">0.1</td>
        <td @click="calcE(0.1)">0.1</td>

        <td @click="calcE(0.05)">0.05</td>

        <td @click="calcE(0.1)">0.10</td>
        <td @click="calcE(0.05)">0.05</td>
        <td @click="calcE(0.01)">0.01</td>
      </tr>
      <tr class="bg-gray-200 text-center">
        <td>Back/Front</td>
        <td @click="addToD(2.0)">2.0</td>
        <td>..</td>
        <td @click="calcE(0.1)">0.1</td>
        <td @click="calcE(0.1)">0.1</td>

        <td @click="calcE(0.05)">0.05</td>

        <td @click="calcE(0.1)">0.10</td>
        <td @click="calcE(0.05)">0.05</td>
        <td @click="calcE(0.01)">0.01</td>
      </tr>
      <tr class="bg-gray-200 text-center">
        <td>D Score</td>
        <td>{{ D }}</td>
        <td>..</td>
        <td>.</td>
        <td>.</td>

        <td>.</td>

        <td>.</td>
        <td>E'Score Total</td>
        <td>{{ E }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'event-sheet',
  data: () => {
    return {
      D: 0.0,
      E: 0.0,
    };
  },
  methods: {
    addToD(dscore) {
      this.D = parseFloat(this.D) + parseFloat(dscore);
    },
    calcE(escr) {
      console.log(typeof err);
      this.E = parseFloat(this.D) - parseFloat(escr);

      console.log(this.E);
    },
  },
};
</script>

<style></style>
