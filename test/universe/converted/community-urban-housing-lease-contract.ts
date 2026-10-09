// Converted from test/universe/corpus/community-urban-housing-lease-contract.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, datetime, define, doc, external, importPackage, m, show } from '../../../src/index.ts'

export default () => {
  const config = external('config')
  const config_with = define('with')
    .named('agreement', T.any, null)
    .named('house', T.any, null)
    .named('jia', T.any, null)
    .named('lease', T.any, null)
    .named('sign-datetime', T.any, null)
    .named('title', T.any, null)
    .named('yi', T.any, null)
    .returns(T.any)
    .external(config)
  return doc(
    m.lines(
      importPackage('@preview/community-urban-housing-lease-contract:0.1.0', [config]),
      show(
        config_with({
          title: '城镇房屋租赁合同',
          signDatetime: datetime.today(),
          house: {
            location: '江西省鹰潭市余江区邓埠镇8号楼808',
            area: 119.37,
            bedroom: 3,
            hall: 2,
            bathroom: 2,
            kitchen: 1,
            orientation: '南北',
            renovation: '精装',
            renovationDetail: '',
            garage: '是',
            garageLocation: '车库/车位位置',
            rentGarage: '是',
            no: '赣(2020)余江区不动产权第88888888号',
            mortgage: '否',
            mortgagee: '无',
            ownership: '所有权人',
            ownershipDetail: '',
            legalTitleCertificate: '不动产权证书',
            legalTitleCertificateDetail: '',
            legalTitleCertificateNo: '房屋合法权属证明编号',
            other: '          ',
          },
          lease: {
            rent: { monthly: 1666, taxesAndFees: { flag: '包含', value: 0 }, payment: '半年', paymentDetail: '' },
            start: { year: 2025, month: 8, day: 23 },
            end: { year: 2026, month: 8, day: 31 },
            rentFree: {
              flag: '是',
              days: 7,
              start: { year: 2025, month: 8, day: 23 },
              end: { year: 2026, month: 8, day: 31 },
            },
            renewal: 30,
            pre: 30,
            delay: 7,
            firstTimePaymentDatetime: '2025-8-23',
            nextTimePaymentDatetime: '提前7日',
            usage: '居住',
            sublease: '是',
            unauthorizedSubleaseTerminateTheContractPeriod: '随时',
            unauthorizedSubleaseTerminateTheContractPeriodPeriod: '',
            garage: { rent: 1000 },
            securityDeposit: { flag: '计息', value: 1666 },
            jiaCosts: '物业费',
            jiaCostsDetail: '   ',
            yiCosts: ['水费', '电费', '燃气费', '电视收视费', '供暖费', '网络使用费', '停车管理费', '卫生费'],
            yiCostsDetail: '   ',
            breach: {
              penalty: '一个月租金',
              rentDelayDays: 7,
              force: '是',
              includeRent: '否',
              other: '                 ',
            },
            renovation: { agree: '否', recovery: '由乙方拆除并恢复原状' },
            maintenance: '是',
            confidential: '     ',
          },
          agreement: { counts: { all: '两', jia: '一', yi: '一' }, other: '                       ' },
          jia: {
            name: '张三',
            identificationType: '居民身份证',
            identificationTypeDetail: '',
            identificationNo: '360622199404040404',
            address: '江西省鹰潭市余江区邓埠镇西畈村666号',
            legalPerson: '张大三',
            agent: '张小三',
            contactPerson: '张三',
            phone: '13812345678',
            postalAddress: '江西省鹰潭市余江区邓埠镇西畈村777号',
            postalCode: '335200',
            email: 'zhangsan@example.com',
            account: { name: '张三', number: '1234567810111213', bank: '中国银行' },
          },
          yi: {
            name: '李四',
            identificationType: '其他',
            identificationTypeDetail: '港澳台通行证',
            identificationNo: '360622199606060606',
            address: '江西省鹰潭市余江区邓埠镇西畈村888号',
            legalPerson: '李大四',
            agent: '李小四',
            contactPerson: '李四',
            phone: '13912345678',
            postalAddress: '江西省鹰潭市余江区邓埠镇西畈村999号',
            postalCode: '335200',
            email: 'lisi@example.com',
          },
        }),
      ),
    ),
  )
}
