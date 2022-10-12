<template>
  <div>
    <div style="position: fixed; width: 100%; background-color: #FFFFFF; z-index: 10; padding-bottom: 10px;">
      <!-- 상단 위치 영역 -->
      <div class="top-navigation-wrap">
        <!-- 
            1) accommodationPageInfo: state => state.accommodation.accommodationPageInfo
            accommodationPageInfo.searchType = 'around' 즉 내 주변일때 
            2) setLocationPopup : 팝업창이 띄워지는데에 switch가 store에서는 false 였는데 해당 컴포넌트에서는 true로 변경
            (true로 변경되면 팝업 창 띄워짐)
         -->
        <template v-if="accommodationPageInfo.searchType === 'around'">
          <div style="width: 80%" @click="setLocationPopup()">
            <p>{{ address }}</p>
          </div>
          <!-- 
            위치 버튼 클릭했을 때도 똑같이 팝업 띄워짐
            위치가 지정된 상태일때는 position_on 상태의 이미지가 띄워지고 그렇지 않으면 off상태의 이미지가 띄워짐
          -->
          <div class="right-icon-wrap" @click="setLocationPopup()">
            <img v-if="isMyPosition" src="images/ic_my_position_on.svg" width="24px">
            <img v-else src="images/ic_my_position_off.svg" width="24px">
          </div>
          <div class="right-icon-wrap">
            <!-- moveSearch : 검색창으로 이동하고 데이터 초기화 시킴 -->
            <img src="images/ic_main_scroll_search.svg" width="24px" @click="moveSearch()">
          </div>

          <div v-if="!isMyPosition" class="position-check-wrap">
            <div class="position-check-tri" />
            <div class="position-word-check-wrap radius_4">
              <p class="fs10 text-white">
                위치가 이곳이 맞나요?
              </p>
            </div>
          </div>
        </template>

        <!-- 내위치에서 들어간 것이 아닐때   즉 테마관에서 더많은 숙소보기를 클릭했다거나 한 상황?-->
        <template v-else>
          <div class="left-icon-wrap" @click="goBack">
            <img src="images/ic_left_arrow_black.svg" width="24px">
          </div>
          <div class="word-left-wrap">
            <p>{{ accommodationPageInfo.title }}</p>
          </div>
          <div class="right-icon-wrap">
            <img src="images/ic_main_scroll_search.svg" width="24px" @click="moveSearch()">
          </div>
        </template>
      </div>
      <!-- /상단 위치 영역 -->

      <!-- 적용된 필터 영역 -->
      <div class="applied-filter-wrap">
        <!-- 필터 카테고리 선정하는 것 -->
        <div class="order-filter-wrap" @click="isOrderByFilter = isOrderByFilter ? false : true">
          <p v-if="searchParameter.orderBy === 'memberCount DESC'">
            단골 추천순
          </p>
          <p v-else-if="searchParameter.orderBy === 'distanceSphere ASC'">
            <!-- 
              region에서 역주변으로 검색한 카테고리를 클리헀을 때 역주변 거리순 정렬만 주어진다. 
              
            -->
            <template v-if="searchParameter.subwayId">
              역주변 거리순
            </template>
            <template v-else>
              거리순
            </template>
          </p>
          <p v-else-if="searchParameter.orderBy === 'accommodationScore DESC'">
            평점 높은순
          </p>
        </div>
        <div class="date-filter-wrap" @click="moveCalendar()">
          <!-- 캘린더 날짜 설정한 경우에  2022.08.26(금) ~ 2022.08.26(금) 로 나타나게 함. -->
          <p v-if="this.searchParameter.startDate && this.searchParameter.endDate">
            {{ this.searchParameter.startDate.replace(/-/gi, ".") + "(" + this.getWeekDay(this.$moment(this.searchParameter.startDate).weekday(), 'KR') + ")" }}
            ~
            {{ this.searchParameter.endDate.replace(/-/gi, ".") + "(" + this.getWeekDay(this.$moment(this.searchParameter.endDate).weekday(), 'KR') + ")" }}
          </p>
        </div>
      </div>
      <!-- /적용된 필터 영역 -->
    </div>

    <!-- 호텔 리스트 영역 -->
    <template v-if="accommodationSearchList && accommodationSearchList.length > 0">
      <div class="footer-bottom-on" :class="{ 'footer-bottom-off': !accommodationPageInfo.isBottom }">
        <template v-for="(accommodation, index) in accommodationSearchList">
          <div class="accommodation-wrap" @click="moveProduct(accommodation, accommodationClickList)">
            <div class="main-image-wrap mb20">
              <div v-if="accommodation.badge || accommodation.subBadge" class="badge-list-wrap">
                <div v-if="accommodation.badge" class="badge-item-wrap">
                  <div class="badge-wrap badge-main">
                    <p v-html="accommodation.badge" />
                    <div class="shading-wrap shading-main-wrap" />
                  </div>
                  <div class="badge-triangle badge-main-triangle" />
                </div>

                <div v-if="accommodation.subBadge" class="badge-item-wrap">
                  <div class="badge-wrap badge-sub">
                    <p v-html="accommodation.subBadge" />
                    <div class="shading-wrap shading-sub-wrap" />
                  </div>
                  <div class="badge-triangle badge-sub-triangle" />
                </div>
              </div>
              <div class="image-wrap">
                <img :src="getImages(accommodation.accommodationMainImage.hoContents.contentsName)">
                <div class="distance-address-wrap bg-darkgray-4-op60">
                  <p><img src="images/ic_position_white.svg" width="6px"> {{ getDistance(accommodation.distanceSphere) }}km | {{ accommodation.accommodationRoadAddress }}</p>
                </div>
              </div>
            </div>
            <div class="accommodation-info-name-wrap">
              <p>{{ accommodation.accommodationName }}</p>
            </div>
            <div class="accommodation-info-wrap">
              <div style="display: flex; flex-direction: column;">
                <div class="accommodation-info-count-wrap">
                  <img src="images/ic_mascot_head.svg">
                  <p>{{ numberWithCommas(accommodation.memberCount) }}명</p>
                </div>
                <div v-if="accommodation.discountMaxPrice && accommodation.discountMaxPrice > 0" class="discount-max-price-wrap mt5">
                  <p class="fs9 fw700">
                    선착순 할인
                  </p>
                  <p class="fs10 fw700">
                    <span class="fs8 mr3">최대</span>{{ numberWithCommas(accommodation.discountMaxPrice) }}<span class="fs8" style="margin-left: 1px;">원</span>
                  </p>
                </div>
              </div>
              <div style="display: flex; flex-direction: column;">
                <div class="accommodation-sales-type-price-wrap">
                  <div v-if="accommodation.dayuseFixedPrice" class="w100">
                    <div class="media-accommodation-sales-type-wrap flex flex-wrap">
                      <div class="accommodation-sales-type">
                        <span>대실</span>
                      </div>
                      <div>
                        <span class="discount-rate">
                          {{
                            accommodation.dayrentCouponMaxPrice == null ?
                              setPerSale(accommodation.dayuseFixedPrice, accommodation.dayuseSellPrice)
                              : setPerSale(accommodation.dayuseFixedPrice, accommodation.dayrentCouponMaxPrice)
                          }}%
                        </span>
                        <span class="fixed-price">{{ numberWithCommas(accommodation.dayuseFixedPrice) }}원</span>
                      </div>
                    </div>
                    <p class="max-use-time">
                      <span v-if="accommodation.useTime">
                        {{ getTimeByType2(accommodation.useTime, '대실') }}
                      </span>

                      <span class="discount-price">
                        <template v-if="accommodation.dayrentisFreeCoupon == 'Y'">
                          무료
                        </template>
                        <template v-else>
                          {{
                            accommodation.dayrentCouponMaxPrice == null ?
                              numberWithCommas(accommodation.dayuseSellPrice)
                              : numberWithCommas(accommodation.dayrentCouponMaxPrice)
                          }}<span class="fs12">원</span>
                        </template>
                      </span>
                    </p>
                  </div>
                  <div v-else class="w100">
                    <div class="media-accommodation-sales-type-wrap flex flex-wrap">
                      <div class="accommodation-sales-type">
                        <span>대실</span>
                      </div>
                      <div>
                        <span class="fs18 fw900" style="color: #707070;">예약마감</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="accommodation-sales-type-price-wrap">
                  <div v-if="accommodation.fullrentFixedPrice" class="w100">
                    <div class="media-accommodation-sales-type-wrap flex flex-wrap">
                      <div class="accommodation-sales-type">
                        <span>숙박</span>
                      </div>
                      <div>
                        <span class="discount-rate">
                          {{
                            accommodation.fullrentCouponMaxPrice == null ?
                              setPerSale(accommodation.fullrentFixedPrice, accommodation.fullrentSellPrice)
                              : setPerSale(accommodation.fullrentFixedPrice, accommodation.fullrentCouponMaxPrice)
                          }}%
                        </span>
                        <span class="fixed-price">{{ numberWithCommas(accommodation.fullrentFixedPrice) }}원</span>
                      </div>
                    </div>
                    <p>
                      <span v-if="accommodation.openTime" class="max-use-time">
                        {{ getTimeByType2(accommodation.openTime, '숙박') }}
                      </span>
                      <span class="discount-price">
                        <template v-if="accommodation.fullrentisFreeCoupon == 'Y'">
                          무료
                        </template>
                        <template v-else>
                          {{
                            accommodation.fullrentCouponMaxPrice == null ?
                              numberWithCommas(accommodation.fullrentSellPrice)
                              : numberWithCommas(accommodation.fullrentCouponMaxPrice)
                          }}<span class="fs12">원</span>
                        </template>

                      </span>
                    </p>
                  </div>
                  <div v-else class="w100">
                    <div class="media-accommodation-sales-type-wrap flex flex-wrap">
                      <div class="accommodation-sales-type">
                        <span>숙박</span>
                      </div>
                      <div>
                        <span class="fs18 fw900" style="color: #707070;">예약마감</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <template v-if="bannerData.find && bannerData.find.length > 0">
            <div v-for="banner in bannerData.find"
                 v-if="( index === 2 && banner.bannerPosition === '3rd_image_banner_area'
                   || index === 6 && banner.bannerPosition === '7th_image_banner_area'
                   || index === 9 && banner.bannerPosition === '10th_image_banner_area' ) 
                   && banner.bannerImages && banner.bannerImages.length > 0"
                 class="mt20 mb10"
                 @click="moveBannerLink(banner)"
            >
              <img class="banner-image" :src="getImages(banner.bannerImages[0].hoContents.contentsName)">
            </div>
          </template>
        </template>
      </div>
    </template>

    <template v-else-if="!isLoading">
      <div class="footer-bottom-on" :class="{ 'footer-bottom-off': !accommodationPageInfo.isBottom }">
        <div class="no-data-wrap">
          <img src="images/ic_not_found_accommodations.svg" width="80px">
          <p class="top-word">
            검색된 호텔이 없습니다.
          </p>
          <p class="other-word">
            서비스이용에 불편을 드려 죄송합니다.
          </p>
        </div>
      </div>
    </template>
    <!-- /호텔 영역 -->

    <infinite-loading v-if="isMoreAccommodationList" ref="infiniteLoading" spinner="waveDots"
                      style="border-bottom: none; position: relative;"
                      :style="{ 'bottom': accommodationPageInfo.isBottom ? '120px' : '80px' }"
                      force-use-infinite-wrapper="element"
                      @infinite="getAccommodation"
    />

    <!-- 검색필터 -->
    <div class="filter-wrap">
      <div :class="{ 'footer-bottom-on-filter': accommodationPageInfo.isBottom }">
        <!-- 지도로 이동하는 metiods -->
        <div class="map" @click="moveMap()">
          <p style="padding-right: 3px;">
            지도
          </p>
          <img src="images/ic_filter_map.svg" width="12px" height="12px">
        </div>
        <div class="center-line" />
        <!-- 필터 페이지로 이동 -->
        <div v-if="searchParameter.isFilter" class="filter" @click="moveFilter()">
          <p style="padding-right: 3px; color: #F8C750;">
            필터
          </p>
          <img src="images/ic_filter_on.svg" width="12px">
          <div class="filter-on-check-wrap">
            <img src="images/ic_filter_on_check.svg" width="15px">
          </div>
        </div>
        <div v-else class="filter" @click="moveFilter()">
          <p style="padding-right: 3px;">
            필터
          </p>
          <img src="images/ic_filter_off.svg" width="12px" height="12px">
        </div>
      </div>
    </div>
    <!-- /검색필터 -->

    <!-- 정렬필터 -->
    <slide-out dock="bottom" :visible.sync="isOrderByFilter" :show-close="false" :size="0">
      <div class="order-filter-slideout-wrap">
        <div class="tr" style="padding: 10px 0;">
          <p style="font-size: 17px; font-weight: 700; color: #000000;" @click="isOrderByFilter = isOrderByFilter ? false : true">
            X
          </p>
        </div>

        <template v-if="searchParameter.orderBy === 'distanceSphere ASC' && searchParameter.subwayId">
          <div>
            <p class="order-filter-slideout-on">
              역 주변 가까운 거리순
            </p>
          </div>
        </template>

        <template v-else>
          <div>
            <p :class="{ 'order-filter-slideout-on': searchParameter.orderBy === 'distanceSphere ASC' && !searchParameter.subwayId }" @click="getAccommodationByOrderBy('distanceSphere ASC')">
              거리순
            </p>
          </div>
          <div>
            <p :class="{ 'order-filter-slideout-on': searchParameter.orderBy === 'memberCount DESC' }" @click="getAccommodationByOrderBy('memberCount DESC')">
              단골 추천순
            </p>
          </div>
          <div>
            <p :class="{ 'order-filter-slideout-on': searchParameter.orderBy === 'accommodationScore DESC' }" @click="getAccommodationByOrderBy('accommodationScore DESC')">
              평점 높은 순
            </p>
          </div>
        </template>
      </div>
    </slide-out>
    <!-- /정렬필터 -->
  </div>
</template>

<script>
import {mapState} from "vuex";
import {DEFAULT_LOCATION, IMAGE_PATH, SCALE_THUMB} from "../url";
import {COMMON_METHOD} from "../../components/common";
import InfiniteLoading from "../Infinite.js";
import SlideOut from '@hyjiacan/vue-slideout';
import "@/assets/css/slideout.css"

export default {
    components: { InfiniteLoading, SlideOut },
    mixins: [
        COMMON_METHOD
    ],
    props: [
        "goBack",
        "isLoading",
        "accommodationClickList"
    ],
    computed: {
        ...mapState({
            accommodationPageInfo: state => state.accommodation.accommodationPageInfo,
            searchParameter: state => state.accommodation.searchParameter,
            accommodationSearchList: state => state.accommodation.accommodationSearchList,
            lastLocate: state => state.localStorage.lastLocate,
            isRefresh: state => state.common.isRefresh,
            bannerData: state => state.service.bannerData,
        })
    },
    data() {
        return {
            isMoreAccommodationList: true,
            isOrderByFilter: false,
            isMyPosition: true,
            locationModal: {
                switch: true
            },
            address: null,
            infiniteLoadingState: null,
        }
    },
    watch: {
        isRefresh() {
            console.log('[isRefresh] ', this.lastLocate, this.isRefresh)
            if(this.isRefresh) {

                this.$store.commit("common/SET_IS_REFRESH", false);

                if(this.lastLocate === null) {
                    this.setLocation();
                }

                if(this.searchParameter.startDate === null || this.searchParameter.endDate === null) {
                    this.setDefaultDate();
                }

                this.$emit('changeIsLoading', true);

                this.$store.commit("accommodation/SET_SEARCH_PARAMETER_BY_KEY", { page: 0 });
                this.$store.commit("accommodation/RESET_ACCOMMODATION_SEARCH_LIST");

                if(this.$refs.infiniteLoading) {
                    this.$refs.infiniteLoading.stateChanger.reset();
                }
            }
        },
    },
    created() {
        if(this.accommodationPageInfo && this.accommodationPageInfo.title === null) {
            this.$store.commit("accommodation/SET_ACCOMMODATION_PAGE_INFO", { isBottom: true, searchType: 'around', title: '내주변'});
        }

        console.log("##################### created 1")
        if(this.accommodationSearchList && this.accommodationSearchList.length === 0) {
            this.$emit('changeIsLoading', true);
        }

        if(this.searchParameter.isDateChange || this.searchParameter.isFilterChange || this.searchParameter.isSearchKeywordChange) {
            // 기간 검색
            // 필터 검색
            // 키워드 검색
            console.log("##################### created 2")
            this.getAccommodationByDateOrFilterOrSearchKeyword();
        } else if(!this.searchParameter.isBack) {
            console.log("##################### created 3")
            this.setDefaultDate();
        }

        if(this.accommodationPageInfo.searchType !== 'region'
            && this.accommodationPageInfo.searchType !== 'searchKeyword'
            && this.accommodationPageInfo.searchType !== 'uniqueTheme'
            && this.accommodationPageInfo.searchType !== 'keyword'
            && !this.searchParameter.isFilterChange) {
            console.log("##################### created 4")
            this.$store.commit("accommodation/SET_SEARCH_PARAMETER_BY_KEY", { radius: 20000 });
        }

        if(this.lastLocate === null && this.accommodationPageInfo.searchType !== 'station' && this.accommodationPageInfo.searchType !== 'map') {
            console.log("##################### created 5")
            this.setLocation();
        } else if(this.lastLocate !== null && this.accommodationPageInfo.searchType !== 'station' && this.accommodationPageInfo.searchType !== 'map') {
            console.log("##################### created 6")
            this.setSearchParameterPosition();
        }

        if(this.lastLocate && this.address === null) {
            console.log("##################### created 7")
            this.setGeoCoder(this.lastLocate)
        }

        if(!this.bannerData.isCall) {
            console.log("##################### created 8")
            this.getBannerList();
        }

    },
    mounted() {

    },
    destroyed() {

    },
    methods: {
        getBannerList() {
            let nowDate = this.$moment(new Date()).format("YYYY-MM-DDTHH:mm:ssZ");
            this.$store.dispatch("service/getBannerList", {sDate: nowDate, eDate: nowDate});
        },
        setDefaultDate() {
            let nowDate = new Date().toUTCString();
            let startDate = this.$moment(nowDate).format('YYYY-MM-DD');
            let endDate = this.$moment(nowDate).add(1, 'days').format('YYYY-MM-DD');

            this.$store.commit("accommodation/SET_SEARCH_PARAMETER_BY_KEY", { startDate });
            this.$store.commit("accommodation/SET_SEARCH_PARAMETER_BY_KEY", { endDate });
            this.$store.commit("accommodation/SET_SEARCH_PARAMETER_BY_KEY", { isBack: false });
        },
        setLocation() {
            // 현재 자기 위치 가져오기
            let vue = this;
            let onSuccess = function(position) {
                console.log('position', position)
                let location = {
                    latitude: 0.0,
                    longitude: 0.0,
                    dist: 30000,
                };
                location.latitude = position.coords.latitude;
                location.longitude = position.coords.longitude;
                location.dist = 1500000;
                location.active = 'Y'

                vue.$store.commit("localStorage/setLastLocate", location);

                vue.setGeoCoder(location);
                vue.setSearchParameterPosition();
            };

            function onError(error) {
                console.log('error', error);
                vue.$store.commit("localStorage/setLastLocate", DEFAULT_LOCATION);

                vue.setGeoCoder(DEFAULT_LOCATION);
                vue.setSearchParameterPosition();
            }

            navigator.geolocation.getCurrentPosition(onSuccess, onError, {
                timeout: 30000
            });
        },
        setGeoCoder(location) {
            this.$store.dispatch("coupon/getLocationToAddress", location)
                .then(res => {
                    this.address =
                        res.data.documents[0].address.region_1depth_name +
                        " " +
                        res.data.documents[0].address.region_2depth_name +
                        " " +
                        res.data.documents[0].address.region_3depth_name;
                    console.log("############################# address", this.address)
                })
                .catch(error => {

                });
        },
        setSearchParameterPosition() {
            this.$store.commit("accommodation/SET_SEARCH_PARAMETER_BY_KEY", { latitude: this.lastLocate.latitude });
            this.$store.commit("accommodation/SET_SEARCH_PARAMETER_BY_KEY", { longitude: this.lastLocate.longitude });
        },
        //인피니트 로딩
        getAccommodationSearchList($state) {
            this.infiniteLoadingState = $state;

            this.$store.dispatch("accommodation/getAccommodationSearchList", this.searchParameter)
                .then((response) => {
                    if(response === 200) {
                        if(this.accommodationSearchList && this.accommodationSearchList.length > 0 && this.accommodationSearchList.length === (this.searchParameter.size * (this.searchParameter.page + 1))) {
                            //SET_SEARCH_PARAMETER_BY_KEY 뮤테이션에 페이지추가하는 데이터 커밋
                            this.$store.commit("accommodation/SET_SEARCH_PARAMETER_BY_KEY", { page: this.searchParameter.page + 1 });
                            $state.loaded();
                        } else {
                            $state.complete();
                            this.isMoreAccommodationList = false;
                        }
                    } else {
                        $state.complete();
                        this.isMoreAccommodationList = false;
                    }

                    this.$emit('changeIsLoading', false);
                })
                .catch((error) => {
                    console.log('error', error)
                })
        },
        // 인피니트 로딩 메소드 
        getAccommodation($state) {
            console.log('getAccommodation($state)', $state)

            if(this.searchParameter.longitude === null || this.searchParameter.latitude === null) {
                setTimeout(() => {
                    this.getAccommodation($state);
                }, 2000);
                return;
            }

            if(this.accommodationSearchList.length >= this.searchParameter.size && this.isMoreAccommodationList) {
                // n+1 로딩
                console.log("n+1 로딩")
                this.getAccommodationSearchList($state);
            } else if(this.accommodationSearchList.length === 0) {
                // 최초 로딩

                // specialPriceTheme, uniqueTheme, keyword, region, station, map, around
                console.log('this.accommodationPageInfo.searchType', this.accommodationPageInfo.searchType)

                // if(this.accommodationPageInfo.searchType === 'specialPriceTheme'
                //     || this.accommodationPageInfo.searchType === 'uniqueTheme'
                //     || this.accommodationPageInfo.searchType === 'keyword'
                //     || this.accommodationPageInfo.searchType === 'station') {
                //     // 당일특가, 유니크 테마, 키워드 조회
                //     // this.$store.commit("accommodation/SET_SEARCH_PARAMETER_BY_KEY", { orderBy: 'distanceSphere ASC' });
                // }

                this.getAccommodationSearchList($state);
            } else {
                $state.complete();
                this.isMoreAccommodationList = false;
            }

        },
        getAccommodationByOrderBy(orderBy) {
            console.log("[getAccommodationByOrderBy]", this.searchParameter.orderBy, orderBy, this.$refs.infiniteLoading, this.accommodationSearchList.length)
            if(this.searchParameter.orderBy === orderBy) {
                this.isOrderByFilter = false;
                return;
            }

            this.$emit('changeIsLoading', true);
            this.$store.commit("accommodation/SET_SEARCH_PARAMETER_BY_KEY", { orderBy });
            this.$store.commit("accommodation/SET_SEARCH_PARAMETER_BY_KEY", { page: 0 });
            this.isOrderByFilter = false;
            this.$store.commit("accommodation/RESET_ACCOMMODATION_SEARCH_LIST");

            if(this.$refs.infiniteLoading) {
                this.$refs.infiniteLoading.stateChanger.reset();
            } else {
                this.getAccommodation(this.infiniteLoadingState);
            }
        },
        getAccommodationByDateOrFilterOrSearchKeyword() {
            this.$emit('changeIsLoading', true);
            this.$store.commit("accommodation/SET_SEARCH_PARAMETER_BY_KEY", { page: 0 });
            this.$store.commit("accommodation/RESET_ACCOMMODATION_SEARCH_LIST");
            if(this.$refs.infiniteLoading) {
                this.$refs.infiniteLoading.stateChanger.reset();
            }
        },
        getImages(contentsName) {
            return IMAGE_PATH + contentsName + SCALE_THUMB;
        },
        moveCalendar() {
            this.resetChanged();
            this.$router.push("/calendar");
        },
        moveFilter() {
            this.resetChanged();
            this.$router.push('/find/filter');
        },
        moveSearch() {
            this.resetChanged();
            this.$router.push('/search');
        },
        /* 초기화 시키는 함수 
        
        */ 
        resetChanged() {
            this.$store.commit("accommodation/SET_SEARCH_PARAMETER_BY_KEY", { isFilterChange: false });
            this.$store.commit("accommodation/SET_SEARCH_PARAMETER_BY_KEY", { isDateChange: false });
            this.$store.commit("accommodation/SET_SEARCH_PARAMETER_BY_KEY", { isSearchKeywordChange: false });
            console.log('필터의 상태는 : '+this.isFilterChange)
        },
        moveMap() {
          /*
            this.$emit('이벤트명');
            emit이라는 것이 하위컴포넌트에서 상위컴포넌트로 이벤트를 발생시킬 때 전달하는 방식인데, 
            예들 들어 하위컴포넌트의 methods에서 $emit('test')으로 지정한 후 상위컴포넌트에 전달받을 이벤트를 
            v-on디렉티브로 받아 v-on:test="메소드명" 이런식으로 지정하면 된다. 
          */
            this.$emit('changeIsLoading', false);
            // SET_ACCOMMODATION_PAGE_INFO_BY_KEY 뮤테이션에 옆의 데이터를 커밋 시킨다.
            this.$store.commit("accommodation/SET_ACCOMMODATION_PAGE_INFO_BY_KEY", { isBottom: false });
            this.$store.commit("accommodation/SET_SEARCH_PARAMETER_BY_KEY", { isMap: true });
        },
        setLocationPopup() {
            this.$store.commit("modal/setLocationModal", this.locationModal);
        }
    }
}
</script>

<style scoped>
.top-navigation-wrap {
    position: relative;
    display: flex;
    width: calc(100% - 30px);
    margin: 20px 15px;
    font-weight: 900;
    font-size: 20px;
    align-items: center;
}

.left-icon-wrap {
    width: 10%;
    text-align: left;
}

.right-icon-wrap {
    width: 10%;
    text-align: right;
}

.word-left-wrap {
    width: 80%;
}

.center-word-wrap {
    text-align: center;
    width: 80%;
    font-weight: 900;
    font-size: 20px;
}

.applied-filter-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 30px);
    margin: 0 15px;
}

.applied-filter-wrap > div {
    border-radius: 5px;
    border: 2px solid #F8C750;
    text-align: center;
    padding: 7px 3px;
    font-size: 13px;
    font-weight: 900;
    color: #3E3E3E;

}

.order-filter-wrap {
    width: 30%;

}

.date-filter-wrap {
    width: 68%;
}

@media screen and (max-width: 342px) {
    .footer-bottom-off {
        width: calc(100% - 30px);
        padding: 130px 0px 60px !important;
        margin: 0 15px;
    }

    .footer-bottom-on {
        width: calc(100% - 30px);
        padding: 130px 0px 100px;
        margin: 0 15px;
    }
}

@media screen and (min-width: 343px) {
    .footer-bottom-off {
        width: calc(100% - 30px);
        padding: 110px 0px 60px !important;
        margin: 0 15px;
    }

    .footer-bottom-on {
        width: calc(100% - 30px);
        padding: 110px 0px 100px;
        margin: 0 15px;
    }
}

.accommodation-wrap {
    padding-bottom: 25px;
    margin-top: 10px;
}

.accommodation-wrap:not(:nth-last-child(1)) {
    border-bottom: 1px solid #E4E4E4;
}

.main-image-wrap {
    position: relative;
    width: 100%;
    height: 210px;
}
.main-image-wrap > .image-wrap {
    position: absolute;
    width: 100%;
    bottom: 0;
}

.main-image-wrap > .image-wrap > img {
    position: relative;
    width: 100%;
    height: 200px;
}

.distance-address-wrap {
    position: absolute;
    width: 100%;
    bottom: 0;
    color: #FFFFFF;
    font-size: 10px;
    font-weight: 700;
    padding: 4px 5px;
}

.badge-list-wrap {
    position: absolute;
    display: flex;
    left: 5px;
    font-size: 13px;
    font-weight: 900;
    z-index: 1;
}

.badge-list-wrap > .badge-item-wrap:not(:last-child) {
    margin-right: 10px;
}

.badge-wrap {
    position: relative;
}

.badge-list-wrap > .badge-item-wrap > .badge-wrap {
    padding: 10px 10px 5px;
}

.badge-main {
    background-color: #FFCD40;
}

.badge-sub {
    background-color: #5CCB94;
}

.badge-triangle {
    width: 100%;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
}

.badge-main-triangle {
    border-top: 10px solid #FFCD40;
}

.badge-sub-triangle {
    border-top: 10px solid #5CCB94;
}

.shading-wrap {
    position: absolute;
    top: 0;
    height: 10px;
    width: 5px;
    right: -17px;
    border-top: 10px solid transparent;
    border-right: 10px solid transparent;
}

.shading-main-wrap {
    border-left: 7px solid #E5B326;
}

.shading-sub-wrap {
    border-left: 7px solid #26B16C;
}

.accommodation-info-wrap {
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
}
.accommodation-info-wrap > div:nth-child(1) {
    width: 45%;
}

.accommodation-info-wrap > div:nth-child(2) {
    width: 50%;
}

.accommodation-info-name-wrap {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 5px;
}

.accommodation-info-count-wrap {
    display: flex;
    align-items: center;
    font-weight: 700;
    color: #46956E;
}

.accommodation-info-count-wrap > img {
    width: 24px;
    margin-right: 5px;
}

.coupon-wrap {
    width: 90%;
    height: 35px;
    display: flex;
    border-radius: 5px;
}

.event-coupon {
    border: 1px solid #FFCD40;
    border-left: 10px solid #FFCD40;
}

.affiliate-coupon {
    border: 1px solid #44BE83;
    border-left: 10px solid #44BE83;
}

.coupon-wrap:not(:last-child) {
    margin-bottom: 5px;
}

.coupon-wrap > div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.coupon-wrap > .coupon-name {
    width: 40%;
    font-size: 11px;
    font-weight: 700;
}

.event-coupon > .coupon-name {
    border-right: 1px dashed #FFCD40;
}

.affiliate-coupon > .coupon-name {
    border-right: 1px dashed #44BE83;
}

.coupon-wrap > .coupon-discount-price {
    width: 55%;
    font-size: 12px;
    font-weight: 900;
    color: #000000;
}

.plus-in-circle-wrap {
    position: absolute;
    width: 80%;
    text-align: center;
    top: calc(50% + 7px);
}

.accommodation-sales-type-price-wrap {
    height: 60px;
    display: flex;
    justify-content: end;
    align-items: end;
    text-align: right;
}

.accommodation-sales-type-price-wrap:not(:last-child) {
    margin-bottom: 10px;
}

.accommodation-sales-type {
    font-size: 18px;
    font-weight: 700;
    color: #707070;
}

.discount-rate {
    font-size: 13px;
    font-weight: 700;
    color: #E00000;
}

.fixed-price {
    font-size: 13px;
    font-weight: 700;
    color: #707070;
    text-decoration-line: line-through;
    white-space: nowrap;
}

.max-use-time {
    font-size: 11px;
    font-weight: 700;
}

.discount-price {
    font-size: 20px;
    font-weight: 900;
    margin-left: 5px;
    white-space: nowrap;
}

.filter-wrap {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
}

.filter-wrap > div {
    position: fixed;
    bottom: 20px;
    display: flex;
    justify-content: center;
    background-color: #FFFFFF;
    font-size: 12px;
    font-weight: 900;
    border-radius: 15px;
    box-shadow:  0px 1px 6px rgb(0 0 0 / 22%);
    z-index: 30;
    align-items: center;
}

.filter-wrap > div > .map, .filter {
    position: relative;
    display: flex;
    padding: 10px 15px;
    align-items: center;
}

.center-line {
    position: absolute;
    display: flex;
    align-items: center;
    height: 70%;
    width: 1px;
    background-color: #231F20;
}

.footer-bottom-on-filter {
    bottom: 70px !important;
}

.filter-on-check-wrap {
    position: absolute;
    width: 70%;
    text-align: right;
    top: -7px;
}

.no-data-wrap {
    position: fixed;
    display: flex;
    width: calc(100% - 30px);
    top: 35%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.no-data-wrap > .top-word {
    font-size: 16px;
    font-weight: 900;
    color: #38383b87;
    margin: 10px 0;
}

.no-data-wrap > .other-word {
    font-size: 12px;
    font-weight: 400;
    color: #38383b7a;
}

.vue-slideout-layout, .vue-slideout-header {
    border-radius: 15px 15px 0 0;
}

.vue-slideout-header {
    border-bottom: none;
}

.order-filter-slideout-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 10px 20px;
    height: 100%;
    font-size: 15px;
    font-weight: 700;
    color: #363636c7;
}

.order-filter-slideout-wrap > div {
    padding: 10px 13px;
}

.order-filter-slideout-wrap > div:not(:last-child) {
    border-bottom : 1px solid #E4E4E4;
}

.order-filter-slideout-on {
    font-weight: 900;
    color: #111111;
}

.position-check-wrap {
    position: absolute;
    width: 100%;
    right: 0px;
    top: 30px;
    display: flex;
    flex-direction: column;
    align-items: end;
}

.position-word-check-wrap {
    width: fit-content;
    padding: 7px 15px;
    background-color: #626161;
}

.position-check-tri {
    position: relative;
    right: 12%;
    width: 0;
    height: 0;
    border-top: none;
    border-bottom: 8px solid #626161;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    margin-left: 20px;
}

@media screen and (max-width:280px) {
    .media-accommodation-sales-type-wrap {
        flex-direction: column;
    }

    .media-accommodation-sales-type-wrap > div {
        width: 100%;
    }

    .accommodation-sales-type-price-wrap {
        height: 90px;
    }

}

@media screen and (min-width:281px) {
    .media-accommodation-sales-type-wrap {
        align-items: baseline;
    }

    .media-accommodation-sales-type-wrap > div:nth-child(1) {
        width: 30%;
    }

    .media-accommodation-sales-type-wrap > div:nth-child(2) {
        width: 70%;
    }

}

.banner-image {
    border-radius: 10px;
    height: 140px;
    width: 100%;
}

.discount-max-price-wrap {
    width: 100px;
    border: 1px solid #F04E45;
    background-color: #F04E45;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.discount-max-price-wrap > p:nth-child(1) {
    text-align: center;
    width: 100%;
    color: #FFFFFF;
}

.discount-max-price-wrap > p:nth-child(2) {
    border-radius: 0px 0px 4px 4px;
    width: 100%;
    text-align: center;
    background-color: #FFFFFF;
}
</style>
