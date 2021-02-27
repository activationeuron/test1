<template>
  <div class="divide-dotted">
    <div class="px-2 py-2 space-y-2">
      <div class="border w-full px-10 flex space-x-3 p-3">
        <div>
          Sheet Name:
          <input
            type="text"
            class="bg-gray-200"
            placeholder="Enter Sheet Name"
            v-model="sheetMeta.sheetName"
          />
        </div>
        <div>
          Sheet Level:
          <select v-model="sheetMeta.sheetLevel">
            <option disabled value="">Please select one</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>

            <option>5</option>

            <option>6</option>

            <option>7</option>

            <option>8</option>

            <option>9</option>
            <option>10</option>
          </select>
        </div>
        <div>
          Age Limit:
          <input
            type="number"
            class="bg-gray-200"
            placeholder="Enter The Age group for Sheet "
            v-model="sheetMeta.ageLimit"
          />
        </div>
        <div>
          Aparatus Type
          <input
            type="text"
            class="bg-gray-200"
            placeholder="Floor,Beem,Uneven Bar"
            v-model="sheetMeta.apparatusType"
          />
        </div>
        <!--         
        <input type="text" placeholder="skill Name " v-model="ele.key" />
        <input type="number" placeholder="Skill point" v-model="ele.value" /> -->
        <!-- 
          <button
            class="bg-blue-400 inline-block py-2 w-40"
            @click="addElement"
          >
            Add Skill
          </button> -->

        <!-- skill point  -->
      </div>
      <div class="border w-full px-10 flex space-x-3 p-2">
        <div>
          Skill Name :
          <input
            type="text"
            placeholder="skill name"
            v-model="ele.key"
            class="bg-gray-200"
          />
        </div>
        <div>
          Skill Name :
          <input
            type="number"
            v-model="ele.value"
            placeholder="Skill D points"
            class="bg-gray-200"
          />
        </div>
        <div>
          <Button
            class="rounded-sm bg-blue-500 px-2 text-white"
            @click="addElement"
            >Add Skill</Button
          >
        </div>
        <div>
          <Button
            class="rounded-sm bg-green-600 px-2 text-white"
            @click="createAparatue"
            >Add To Aparatus
          </Button>
        </div>
        |
        <div>
          Error Name:
          <input
            type="text"
            placeholder="skill name"
            v-model="err.key"
            class="bg-gray-200"
          />
        </div>
        <div>
          Value:
          <input
            type="number"
            placeholder="skill name"
            v-model="err.value"
            class="bg-gray-200"
          />
        </div>
        <div>
          <Button
            class="rounded-sm bg-green-600 px-2 text-white"
            @click="addError"
            >Add Error
          </Button>
        </div>
      </div>
    </div>

    <!-- skill Selement -->
    <div class="uppercase text-xs w-full text-center">Created Aparatus</div>

    <div class="h-20">
      <div v-for="(element, j) in element" :key="j">
        <div class="flex">
          <div class="w-1/3 bg-gray-400 flex mx-3">
            <span class="flex flex-1">
              {{ element.key }}
            </span>
            <span class="w-10 cursor-pointer bg-gray-200">
              {{ element.value / 10 }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div v-show="!(element.length !== 0)" class="text-center uppercase py-5">
      Plase Create a Aparatues
    </div>

    <div class="uppercase text-xs w-full text-center">Created Sheet</div>
    <div v-if="aparatus1.length != 0">
      <div
        v-for="(elements, i) in Object.entries(aparatus1)"
        :key="i"
        class="mb-1"
      >
        <!-- print object array -->
        <!-- fails -->
        <div class="flex">
          <div class="mx-3 w-1/4"></div>
          <div
            v-for="(fail, x) in fails1"
            :key="x"
            class="w-10 overflow-x-hidden"
          >
            {{ fail.key }}
          </div>
        </div>
        <div v-for="(element, j) in elements[1]" :key="j">
          <div class="flex">
            <div class="w-1/4 bg-gray-400 flex mx-3">
              <span class="flex flex-1">
                {{ element.key }}
              </span>
              <span
                class="w-10 cursor-pointer"
                @click="addToD(element.value, i, j)"
                :class="[
                  dindex.includes(parseInt(''.concat(i, j)))
                    ? 'bg-green-300'
                    : 'bg-gray-500',
                ]"
              >
                {{ element.value / 10 }}
              </span>
            </div>
            <!-- error prints  -->
            <div class="grid grid-cols-12">
              <div
                v-for="(e, k) in fails1"
                :key="k"
                @click="calcE(e.value, i, j, k)"
                class="w-10 text-center cursor-pointer"
                :class="[
                  k % 2 === 0 ? 'bg-gray-100' : 'bg-gray-300',
                  eindex.includes(parseInt(''.concat(i, j, k)))
                    ? 'bg-red-300'
                    : 'bg-gray-500',
                ]"
              >
                {{ e.value }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-10 left-1/2">
        <button
          class="bg-blue-400 px-2 py-2 font-bold text-white rounded-sm"
          @click="postDataSheet"
        >
          Create Sheet
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'event-sheet',
  data: function() {
    return {
      sheetMeta: {
        sheetName: '',
        sheetLevel: '',
        ageLimit: '',
        apparatusType: '',
      },

      ele: {
        key: '',
        value: 0,
      },
      err: {
        key: '',
        value: 0,
      },
      score: {
        dscore: 0,
        escore: 0,
        total: 0,
      },

      dindex: [],
      eindex: [],
      aparatus1: {},
      fails1: [],

      element: [],
      counter: 0,
    };
  },
  methods: {
    addToD: function(dscore, i, j) {
      let unique = parseInt(''.concat(i, j));
      if (!this.dindex.includes(unique)) {
        let score = this.score.escore - dscore;
        this.score.escore = score;

        this.dindex.push(unique);
      } else {
        console.log(this.score.escore - dscore);
        let score = this.score.escore + dscore;
        this.score.escore = score;

        this.dindex.splice(this.dindex.indexOf(unique), 1);
      }
    },
    calcE: function(escr, i, j, k) {
      let unique = parseInt(''.concat(i, j, k));
      if (!this.eindex.includes(unique)) {
        let score = this.score.escore - escr;
        this.score.escore = score;
        this.eindex.push(unique);
      } else {
        console.log(this.score.escore - escr);
        let score = this.score.escore + escr;
        this.score.escore = score;

        this.eindex.splice(this.eindex.indexOf(unique), 1);
      }
    },
    addElement: function() {
      const a = { key: this.ele.key, value: this.ele.value };

      if (!this.ele.key) {
        this.$toasted.show('Skill Name Must Not Be Empty');
        throw new Error('Skill Name Must Not Be Empty');
      }
      if (!this.ele.value) {
        this.$toasted.show('Skill Point Must Not Be Empty');
        throw new Error('Skill Point Must Not Be Empty');
      }
      this.element.push(a);
      this.ele.key = '';
      this.ele.value = 0;
    },
    createAparatue: function() {
      console.log('create aparatue');
      if (!this.element.length) {
        throw new Error('can be empty');
      }
      let apindex = this.counter;
      this.aparatus1[apindex] = this.element;
      let newObje = this.aparatus1;
      // this.aparatus1.push({ [apindex]: this.element });
      this.aparatus1 = newObje;
      this.counter = this.counter + 1;
      this.element = [];
      this.$forceUpdate();
    },
    addError: function() {
      let error = { key: this.err.key, value: this.err.value };
      this.fails1.push(error);
    },
    // Database method
    postDataSheet: function() {
      const sheetObject = {
        ...this.sheetMeta,
        fails: this.fails1,
        apparatus: this.aparatus1,
      };
      this.$store.dispatch('createSheet', sheetObject);
    },
  },
  computed: {
    table() {
      return this.aparatus;
    },
  },
};
</script>
