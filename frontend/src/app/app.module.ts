import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeSw from '@angular/common/locales/sw';
import { NgModule } from '@angular/core';
import { NgProgressModule } from 'ngx-progressbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel'
import { NgChartsModule as ChartsModule } from 'ng2-charts';
registerLocaleData(localeSw, 'sw');
// import {ConnectionServiceModule} from 'ngx-connection-service';

// import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './navigation/navigation.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import {MatDialogModule} from '@angular/material/dialog';
import { RouterModule, Routes, Router } from '@angular/router';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MDBBootstrapModule} from 'angular-bootstrap-md'
// import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeComponent } from './home/home.component';
import { LowlayerComponent } from './lowlayer/lowlayer.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { EditComponent } from './edit/edit.component';
// import {MatStepperModule} from '@angular/material/stepper';
import { LoanComponent } from './loan/loan.component';
import { HistoryComponent } from './history/history.component';
import { RestframeworkService } from './apiservice/restframework.service';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { WotewatejaComponent } from './wotewateja/wotewateja.component';
import { WadaiwamweziComponent } from './wadaiwamwezi/wadaiwamwezi.component';
import { MalipoComponent } from './malipo/malipo.component';
import { WaliokopaComponent } from './waliokopa/waliokopa.component';
import { OngezaAccountComponent } from './ongeza-account/ongeza-account.component';
import { WaliojulishwaComponent } from './waliojulishwa/waliojulishwa.component';
import { OngezaMkopoComponent } from './ongeza-mkopo/ongeza-mkopo.component';
import { MyfilterPipe } from './myfilter.pipe';
import { MoneyPipe, TranslatePipe } from './settings/settings.pipes';
import { SettingsMenuComponent } from './settings/settings-menu.component';
import { CloseFormDirective } from './settings/close-form.directive';
import { DetailsViewComponent } from './details-view/details-view.component';
import { AdminKopaComponent } from './admin-kopa/admin-kopa.component';
import { AdminHistoryComponent } from './admin-history/admin-history.component';
import { FormMkopoComponent } from './form-mkopo/form-mkopo.component';
import { EditaccountComponent } from './editaccount/editaccount.component';
import { BankstatementComponent } from './bankstatement/bankstatement.component';
import { OpenSnackerComponent } from './open-snacker/open-snacker.component';
import { MwezihuumesejiComponent } from './mwezihuumeseji/mwezihuumeseji.component';
import { OverdueThisMonthComponent } from './overdue-this-month/overdue-this-month.component';
import { BankComponent } from './bank/bank.component';
import { AtmComponent } from './atm/atm.component';
import { SlipComponent } from './slip/slip.component';
import { IdentityComponent } from './identity/identity.component';
import { OpenSnackserrorComponent } from './open-snackserror/open-snackserror.component';
import { NyumbaComponent } from './nyumba/nyumba.component';
import { NyumbaConnectorComponent } from './nyumba-connector/nyumba-connector.component';
import { OngezaNyumbaComponent } from './ongeza-nyumba/ongeza-nyumba.component';
import { MadeniNyumbaComponent } from './madeni-nyumba/madeni-nyumba.component';
import { MalipoNyumbaComponent } from './malipo-nyumba/malipo-nyumba.component';
import { NyumbaDetailsComponent } from './nyumba-details/nyumba-details.component';
import { WapangajiComponent } from './wapangaji/wapangaji.component';
import { VyumbaWaziComponent } from './vyumba-wazi/vyumba-wazi.component';
import { MarekebishoComponent } from './marekebisho/marekebisho.component';
import { PangishaComponent } from './pangisha/pangisha.component';
import { PersonalNyumbaDetailsComponent } from './personal-nyumba-details/personal-nyumba-details.component';
import { PersonalPaymentsComponent } from './personal-payments/personal-payments.component';
import { PersonalRudiaMkatabaComponent } from './personal-rudia-mkataba/personal-rudia-mkataba.component';
import { RudiaMkatabaComponent } from './rudia-mkataba/rudia-mkataba.component';
import { NyumbaMiddledocumentsComponent } from './nyumba-middledocuments/nyumba-middledocuments.component';
import { NyumbaMkatabaComponent } from './nyumba-mkataba/nyumba-mkataba.component';
import { NyumbaStatementsComponent } from './nyumba-statements/nyumba-statements.component';
import { NyumbaIdentityComponent } from './nyumba-identity/nyumba-identity.component';
import { EditPersonalComponent } from './edit-personal/edit-personal.component';
import { NyumbaApplicationComponent } from './nyumba-application/nyumba-application.component';
import { NyumbaWapangajiWoteComponent } from './nyumba-wapangaji-wote/nyumba-wapangaji-wote.component';
import { NyumbaWadaiwaComponent } from './nyumba-wadaiwa/nyumba-wadaiwa.component';
import { NyumbaMalipoComponent } from './nyumba-malipo/nyumba-malipo.component';
import { PersonalEditAccountComponent } from './personal-edit-account/personal-edit-account.component';
import { InfosComponent } from './infos/infos.component';
import { InfoNyumbaComponent } from './info-nyumba/info-nyumba.component';
import { NyumbaInfo1Component } from './nyumba-info1/nyumba-info1.component';
import { SikuDeteilsComponent } from './siku-deteils/siku-deteils.component';
import { SikuKopeshaDeteilsComponent } from './siku-kopesha-deteils/siku-kopesha-deteils.component';
import { PersonalWekaComponent } from './personal-weka/personal-weka.component';
import { PersonalToaComponent } from './personal-toa/personal-toa.component';
import { GuardGuard } from './guard.guard';
import { TumaMesgComponent } from './tuma-mesg/tuma-mesg.component';
import { SmsChatComponent } from './sms-chat/sms-chat.component';
import { OngezaHouseOwnerComponent } from './ongeza-house-owner/ongeza-house-owner.component';
import { WamilikiComponent } from './wamiliki/wamiliki.component';
import { MmilikiDetailsComponent } from './mmiliki-details/mmiliki-details.component';
import { OwnerWithdrawComponent } from './owner-withdraw/owner-withdraw.component';
import { OwnerDepositComponent } from './owner-deposit/owner-deposit.component';
import { OwnerDocumentsComponent } from './owner-documents/owner-documents.component';
import { OwnerEditComponent } from './owner-edit/owner-edit.component';
import { OwnerMalipoComponent } from './owner-malipo/owner-malipo.component';
import { OwnerMkatabaComponent } from './owner-mkataba/owner-mkataba.component';
import { OwnerKitambulishoComponent } from './owner-kitambulisho/owner-kitambulisho.component';
import { OwnerApplicationComponent } from './owner-application/owner-application.component';
import { OwnerSlipComponent } from './owner-slip/owner-slip.component';
import { MkopoDepositComponent } from './mkopo-deposit/mkopo-deposit.component';
import { MkopoWithdrawComponent } from './mkopo-withdraw/mkopo-withdraw.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { NyumbaFrontComponent } from './nyumba-front/nyumba-front.component';
import { OngezaChumbaComponent } from './ongeza-chumba/ongeza-chumba.component';
import { NyumbaFrontDetailsComponent } from './nyumba-front-details/nyumba-front-details.component';
import { MikopoFrontComponent } from './mikopo-front/mikopo-front.component';
import { DirectpaymentComponent } from './directpayment/directpayment.component';
import { DasboardMkopeshajiComponent } from './dasboard-mkopeshaji/dasboard-mkopeshaji.component';
import { DasboardMkopeshajiWatejaComponent } from './dasboard-mkopeshaji-wateja/dasboard-mkopeshaji-wateja.component';
import { DasboardMkopeshajiWaliokopaComponent } from './dasboard-mkopeshaji-waliokopa/dasboard-mkopeshaji-waliokopa.component';
import { DasboardMkopeshajiMalipoComponent } from './dasboard-mkopeshaji-malipo/dasboard-mkopeshaji-malipo.component';
import { DasboardMkopeshajiOngezaAccountComponent } from './dasboard-mkopeshaji-ongeza-account/dasboard-mkopeshaji-ongeza-account.component';
import { DasboardMkopeshajiWadaiwaMweziHuuComponent } from './dasboard-mkopeshaji-wadaiwa-mwezi-huu/dasboard-mkopeshaji-wadaiwa-mwezi-huu.component';
import { OngezaKampuniComponent } from './ongeza-kampuni/ongeza-kampuni.component';
import { DasboardMkopeshajiOngezaMkopoComponent } from './dasboard-mkopeshaji-ongeza-mkopo/dasboard-mkopeshaji-ongeza-mkopo.component';
import { DasboardMkopeshajiHistoryComponent } from './dasboard-mkopeshaji-history/dasboard-mkopeshaji-history.component';
import { DashboardMkopeshajiMkopoLipaComponent } from './dashboard-mkopeshaji-mkopo-lipa/dashboard-mkopeshaji-mkopo-lipa.component';
import { DashboardMkopeshajiSikuComponent } from './dashboard-mkopeshaji-siku/dashboard-mkopeshaji-siku.component';
import { DashboardMkopeshajicompanyInfoComponent } from './dashboard-mkopeshajicompany-info/dashboard-mkopeshajicompany-info.component';
import { DashboardMkopeshajiSikuToaComponent } from './dashboard-mkopeshaji-siku-toa/dashboard-mkopeshaji-siku-toa.component';
import { NyumbaDashboardRoomPriceComponent } from './nyumba-dashboard-room-price/nyumba-dashboard-room-price.component';
import { DirectPayHistoryComponent } from './direct-pay-history/direct-pay-history.component';
import { DirecpayDetailsComponent } from './direcpay-details/direcpay-details.component';
import { AdminDashboardDukaComponent } from './admin-dashboard-duka/admin-dashboard-duka.component';
import { OngezaMmilikiDukaComponent } from './ongeza-mmiliki-duka/ongeza-mmiliki-duka.component';
import { OngezaDukaComponent } from './ongeza-duka/ongeza-duka.component';
import { MadukaYoteComponent } from './maduka-yote/maduka-yote.component';
import { MadukaYoteBidhaaZoteComponent } from './maduka-yote-bidhaa-zote/maduka-yote-bidhaa-zote.component';
import { MadukaWaliokopaComponent } from './maduka-waliokopa/maduka-waliokopa.component';
import { MadukaMalipoWaudumuComponent } from './maduka-malipo-waudumu/maduka-malipo-waudumu.component';
import { WakalaOngezaMmilikiComponent } from './wakala-ongeza-mmiliki/wakala-ongeza-mmiliki.component';
import { WakalaComponent } from './wakala/wakala.component';
import { WakalaAdminComponent } from './wakala-admin/wakala-admin.component';
import { WakalaWorkersComponent } from './wakala-workers/wakala-workers.component';
import { WakalaWoteComponent } from './wakala-wote/wakala-wote.component';
import { OngezaWakalaComponent } from './ongeza-wakala/ongeza-wakala.component';
import { OngezaWakalaWorkersComponent } from './ongeza-wakala-workers/ongeza-wakala-workers.component';
import { WakalaDashboardComponent } from './wakala-dashboard/wakala-dashboard.component';
import { WakalaMmilikiDashboardComponent } from './wakala-mmiliki-dashboard/wakala-mmiliki-dashboard.component';
import { WakalaWorkerDashboardComponent } from './wakala-worker-dashboard/wakala-worker-dashboard.component';
import { BmwakalaWorkerListComponent } from './bmwakala-worker-list/bmwakala-worker-list.component';
import { BmwakalaProfileComponent } from './bmwakala-profile/bmwakala-profile.component';
import { BmwakalaReportComponent } from './bmwakala-report/bmwakala-report.component';
import { BmwakalaMatumiziComponent } from './bmwakala-matumizi/bmwakala-matumizi.component';
import { WakalaMmilikiWoteComponent } from './wakala-mmiliki-wote/wakala-mmiliki-wote.component';
import { WakalaMmilikiDirectorProfileComponent } from './wakala-mmiliki-director-profile/wakala-mmiliki-director-profile.component';
import { WakalaMmilikiDirectorListWakalaComponent } from './wakala-mmiliki-director-list-wakala/wakala-mmiliki-director-list-wakala.component';
import { WakalaMmilikiDirectorListWorkersComponent } from './wakala-mmiliki-director-list-workers/wakala-mmiliki-director-list-workers.component';
import { WakalaMmilikiDirectorOngezaWorkersComponent } from './wakala-mmiliki-director-ongeza-workers/wakala-mmiliki-director-ongeza-workers.component';
import { WakalaMmilikiDirectorOngezaWakalaComponent } from './wakala-mmiliki-director-ongeza-wakala/wakala-mmiliki-director-ongeza-wakala.component';
import { WorkersDashboardComponent } from './workers-dashboard/workers-dashboard.component';
import { WorkerKaziComponent } from './worker-kazi/worker-kazi.component';
import { WorkerMatumiziComponent } from './worker-matumizi/worker-matumizi.component';
import { WorkerReportComponent } from './worker-report/worker-report.component';
import { WorkerProfileComponent } from './worker-profile/worker-profile.component';
import { WorkersKuwekaComponent } from './workers-kuweka/workers-kuweka.component';
import { WorkersKutoaComponent } from './workers-kutoa/workers-kutoa.component';
import { DashboardHatiMikopoComponent } from './dashboard-hati-mikopo/dashboard-hati-mikopo.component';
import { OverviewWorkerComponent } from './overview-worker/overview-worker.component';
import { OverviewWakalaComponent } from './overview-wakala/overview-wakala.component';
import { OverviewDirectorComponent } from './overview-director/overview-director.component';
import { WorkersInfoMonthlyComponent } from './workers-info-monthly/workers-info-monthly.component';
import { WorkerPageReturnsComponent } from './worker-page-returns/worker-page-returns.component';
import { WakalaKaziComponent } from './wakala-kazi/wakala-kazi.component';
import { WakalaKaziProcessorsComponent } from './wakala-kazi-processors/wakala-kazi-processors.component';
import { WakalaKaziMtajiComponent } from './wakala-kazi-mtaji/wakala-kazi-mtaji.component';
import { OrdersDashboardComponent } from './orders-dashboard/orders-dashboard.component';
import { OrdersDashboardOngezaManagerComponent } from './orders-dashboard-ongeza-manager/orders-dashboard-ongeza-manager.component';
import { OrdersDashboardOngezaWorkerComponent } from './orders-dashboard-ongeza-worker/orders-dashboard-ongeza-worker.component';
import { OrdersDashboardMmilikiComponent } from './orders-dashboard-mmiliki/orders-dashboard-mmiliki.component';
import { OrdersDashboardBidhaaZoteComponent } from './orders-dashboard-bidhaa-zote/orders-dashboard-bidhaa-zote.component';
import { OrdersDashboardWaliokopaComponent } from './orders-dashboard-waliokopa/orders-dashboard-waliokopa.component';
import { OrdersDashboardManagerComponent } from './orders-dashboard-manager/orders-dashboard-manager.component';
import { OrdersDashboardOngezaMmilikiComponent } from './orders-dashboard-ongeza-mmiliki/orders-dashboard-ongeza-mmiliki.component';
import { OrdersDashboardMalipoComponent } from './orders-dashboard-malipo/orders-dashboard-malipo.component';
import { OrderManagersWoteComponent } from './order-managers-wote/order-managers-wote.component';
import { OrderDirectorsWoteComponent } from './order-directors-wote/order-directors-wote.component';
import { OrderWorkersWoteComponent } from './order-workers-wote/order-workers-wote.component';
import { OrderManagersDashboardComponent } from './order-managers-dashboard/order-managers-dashboard.component';
import { OrderWorkersDashboardComponent } from './order-workers-dashboard/order-workers-dashboard.component';
import { OrderDirectorsDashboardComponent } from './order-directors-dashboard/order-directors-dashboard.component';
import { OrderWorkerReportDashboardComponent } from './order-worker-report-dashboard/order-worker-report-dashboard.component';
import { OrderManagerReportDashboardComponent } from './order-manager-report-dashboard/order-manager-report-dashboard.component';
import { OrderWorkerListsComponent } from './order-worker-lists/order-worker-lists.component';
import { OrderWorkerProfileComponent } from './order-worker-profile/order-worker-profile.component';
import { OrderWorkerMatumiziComponent } from './order-worker-matumizi/order-worker-matumizi.component';
import { OrderManagerMatumiziComponent } from './order-manager-matumizi/order-manager-matumizi.component';
import { OrderManagerProfileComponent } from './order-manager-profile/order-manager-profile.component';
import { OrderDirectorProfileComponent } from './order-director-profile/order-director-profile.component';
import { OrderDirectorMatumiziComponent } from './order-director-matumizi/order-director-matumizi.component';
import { OrderDirectorReportComponent } from './order-director-report/order-director-report.component';
import { OrderDirectorOrderListComponent } from './order-director-order-list/order-director-order-list.component';
import { MadukaDashboardComponent } from './maduka-dashboard/maduka-dashboard.component';
import { MadukaListSalesComponent } from './maduka-list-sales/maduka-list-sales.component';
import { MadukaListProductsComponent } from './maduka-list-products/maduka-list-products.component';
import { MadukaListReportComponent } from './maduka-list-report/maduka-list-report.component';
import { MadukaListProfileComponent } from './maduka-list-profile/maduka-list-profile.component';
import { MadukaListBorrowersComponent } from './maduka-list-borrowers/maduka-list-borrowers.component';
import { MadukaListMatumiziComponent } from './maduka-list-matumizi/maduka-list-matumizi.component';
import { OrderManagerSuccessfulComponent } from './order-manager-successful/order-manager-successful.component';
import { WorkerMadeniComponent } from './worker-madeni/worker-madeni.component';
import { OrderClientsComponent } from './order-clients/order-clients.component';
import { OrderManagerListsComponent } from './order-manager-lists/order-manager-lists.component';
import { OrderReportComponent } from './order-report/order-report.component';
import { OrderMatumiziComponent } from './order-matumizi/order-matumizi.component';
import { OrderDirectorWorkersComponent } from './order-director-workers/order-director-workers.component';
import { OrdersApprouvedComponent } from './orders-approuved/orders-approuved.component';
import { OrderProductsComponent } from './order-products/order-products.component';
import { OrderWorkingDashboardComponent } from './order-working-dashboard/order-working-dashboard.component';
import { OrderCustomersComponent } from './order-customers/order-customers.component';
import { OrderRegisterCustomersComponent } from './order-register-customers/order-register-customers.component';
import { MadukaMalipoWafanyakaziComponent } from './maduka-malipo-wafanyakazi/maduka-malipo-wafanyakazi.component';
import { OrdersDashboardWorkerComponent } from './orders-dashboard-worker/orders-dashboard-worker.component';
import { OrdersDirectorApprovedComponent } from './orders-director-approved/orders-director-approved.component';
import { OrdersListDirectorComponent } from './orders-list-director/orders-list-director.component';
import { OrdersWorkerWithdrawComponent } from './orders-worker-withdraw/orders-worker-withdraw.component';
import { OrdersOngezaCustomersComponent } from './orders-ongeza-customers/orders-ongeza-customers.component';
import { OrdersCustomersListsComponent } from './orders-customers-lists/orders-customers-lists.component';
import { OrdersSetOrdersComponent } from './orders-set-orders/orders-set-orders.component';
import { OrdersManagersOngezaProductsComponent } from './orders-managers-ongeza-products/orders-managers-ongeza-products.component';
import { OrdersManagersProductsComponent } from './orders-managers-products/orders-managers-products.component';
import { OrderManagerWorkersListsComponent } from './order-manager-workers-lists/order-manager-workers-lists.component';
import { OrderWorkerOrderListsComponent } from './order-worker-order-lists/order-worker-order-lists.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { OrderManagersWaDirectorComponent } from './order-managers-wa-director/order-managers-wa-director.component';
import { OrderWorkersWaDirectorComponent } from './order-workers-wa-director/order-workers-wa-director.component';
import { NyumbaReportComponent } from './nyumba-report/nyumba-report.component';
import { DukaWamilikiComponent } from './duka-wamiliki/duka-wamiliki.component';
import { DukaDirectorDashboardComponent } from './duka-director-dashboard/duka-director-dashboard.component';
import { DukaDirectorSalesComponent } from './duka-director-sales/duka-director-sales.component';
import { DukaDirectorProductsComponent } from './duka-director-products/duka-director-products.component';
import { DukaDirectorReportComponent } from './duka-director-report/duka-director-report.component';
import { DukaDirectorProfileComponent } from './duka-director-profile/duka-director-profile.component';
import { DukaDirectorBorrowersComponent } from './duka-director-borrowers/duka-director-borrowers.component';
import { DukaDirectorMatumiziComponent } from './duka-director-matumizi/duka-director-matumizi.component';
import { DukaDirectorCreateComponent } from './duka-director-create/duka-director-create.component';
import { DirectorDukaInvoicesComponent } from './director-duka-invoices/director-duka-invoices.component';
import { AddedProductsComponent } from './added-products/added-products.component';
import { DukaMovententComponent } from './duka-moventent/duka-moventent.component';
import { IndustryComponent } from './industry/industry.component';
import { DukaDirectorIndustryComponent } from './duka-director-industry/duka-director-industry.component';
import { DukaDirectorOrderComponent } from './duka-director-order/duka-director-order.component';
import { JobsComponent } from './jobs/jobs.component';
import { MikopoAdvancedCalculatorComponent } from './mikopo-advanced-calculator/mikopo-advanced-calculator.component';
import { OtherSourcesComponent } from './other-sources/other-sources.component';
import { DukaGraphsComponent } from './duka-graphs/duka-graphs.component';


@NgModule({ declarations: [
        SmsChatComponent,
        AppComponent,
        DirecpayDetailsComponent,
        DasboardMkopeshajiWadaiwaMweziHuuComponent,
        OngezaWakalaWorkersComponent,
        WakalaMmilikiDirectorProfileComponent,
        DasboardMkopeshajiOngezaAccountComponent,
        NavigationComponent,
        FooterComponent,
        WakalaWoteComponent,
        MadukaListMatumiziComponent,
        MadukaMalipoWafanyakaziComponent,
        LoginComponent,
        NyumbaFrontDetailsComponent,
        OrderWorkersWaDirectorComponent,
        OngezaMmilikiDukaComponent,
        OrdersDashboardWorkerComponent,
        DukaWamilikiComponent,
        // WorkerProfileComponent,
        OngezaWakalaComponent,
        AboutComponent,
        WorkerReportComponent,
        WakalaWorkersComponent,
        OrdersListDirectorComponent,
        HomeComponent,
        OrdersOngezaCustomersComponent,
        LowlayerComponent,
        RegisterComponent,
        DashboardComponent,
        NyumbaDashboardRoomPriceComponent,
        LoginComponent,
        DasboardMkopeshajiComponent,
        AccountInfoComponent,
        OrderCustomersComponent,
        DukaDirectorMatumiziComponent,
        DepositComponent,
        WithdrawComponent,
        EditComponent,
        LoanComponent,
        HistoryComponent,
        AdminDashboardComponent,
        DukaMovententComponent,
        WakalaKaziComponent,
        DukaDirectorMatumiziComponent,
        WotewatejaComponent,
        WadaiwamweziComponent,
        MalipoComponent,
        WaliokopaComponent,
        OngezaAccountComponent,
        WaliojulishwaComponent,
        OngezaMkopoComponent,
        MyfilterPipe,
        MoneyPipe,
        TranslatePipe,
        SettingsMenuComponent,
        CloseFormDirective,
        DetailsViewComponent,
        AdminKopaComponent,
        AdminHistoryComponent,
        FormMkopoComponent,
        EditaccountComponent,
        BankstatementComponent,
        PersonalRudiaMkatabaComponent,
        ReceiptComponent,
        OpenSnackerComponent,
        MwezihuumesejiComponent,
        OverdueThisMonthComponent,
        BankComponent,
        AtmComponent,
        SlipComponent,
        OrdersDirectorApprovedComponent,
        MadukaListProfileComponent,
        IdentityComponent,
        OpenSnackserrorComponent,
        NyumbaComponent,
        NyumbaConnectorComponent,
        OngezaNyumbaComponent,
        MadeniNyumbaComponent,
        MalipoNyumbaComponent,
        OrdersDashboardComponent,
        NyumbaDetailsComponent,
        WapangajiComponent,
        VyumbaWaziComponent,
        MarekebishoComponent,
        PangishaComponent,
        PersonalNyumbaDetailsComponent,
        PersonalPaymentsComponent,
        RudiaMkatabaComponent,
        NyumbaMiddledocumentsComponent,
        NyumbaIdentityComponent,
        NyumbaMkatabaComponent,
        NyumbaStatementsComponent,
        OrderWorkingDashboardComponent,
        EditPersonalComponent,
        NyumbaApplicationComponent,
        NyumbaWapangajiWoteComponent,
        NyumbaWadaiwaComponent,
        NyumbaMalipoComponent,
        PersonalEditAccountComponent,
        InfosComponent,
        InfoNyumbaComponent,
        NyumbaInfo1Component,
        SikuDeteilsComponent,
        SikuKopeshaDeteilsComponent,
        PersonalWekaComponent,
        PersonalToaComponent,
        TumaMesgComponent,
        OtherSourcesComponent,
        OngezaHouseOwnerComponent,
        WamilikiComponent,
        MmilikiDetailsComponent,
        OrderManagerSuccessfulComponent,
        OwnerWithdrawComponent,
        OwnerDepositComponent,
        OwnerDocumentsComponent,
        OwnerEditComponent,
        OwnerMalipoComponent,
        OwnerMkatabaComponent,
        OwnerKitambulishoComponent,
        OwnerApplicationComponent,
        OwnerSlipComponent,
        WakalaKaziMtajiComponent,
        OrderDirectorMatumiziComponent,
        OrderDirectorReportComponent,
        MkopoDepositComponent,
        MkopoWithdrawComponent,
        DukaDirectorOrderComponent,
        WakalaKaziProcessorsComponent,
        ReceiptComponent,
        NyumbaFrontComponent,
        OngezaChumbaComponent,
        NyumbaFrontDetailsComponent,
        MikopoFrontComponent,
        DirectpaymentComponent,
        DasboardMkopeshajiComponent,
        OrderManagerMatumiziComponent,
        DasboardMkopeshajiWatejaComponent,
        DasboardMkopeshajiWaliokopaComponent,
        DasboardMkopeshajiMalipoComponent,
        OngezaKampuniComponent,
        DasboardMkopeshajiOngezaMkopoComponent,
        DasboardMkopeshajiHistoryComponent,
        DashboardMkopeshajiMkopoLipaComponent,
        DashboardMkopeshajiSikuComponent,
        DashboardMkopeshajicompanyInfoComponent,
        DashboardMkopeshajiSikuToaComponent,
        NyumbaDashboardRoomPriceComponent,
        DirectPayHistoryComponent,
        OrdersManagersOngezaProductsComponent,
        AdminDashboardDukaComponent,
        OngezaMmilikiDukaComponent,
        OngezaDukaComponent,
        MadukaYoteComponent,
        MadukaYoteBidhaaZoteComponent,
        MadukaWaliokopaComponent,
        DukaDirectorProductsComponent,
        MadukaMalipoWaudumuComponent,
        WakalaOngezaMmilikiComponent,
        WakalaComponent,
        WakalaAdminComponent,
        WakalaDashboardComponent,
        WakalaMmilikiDashboardComponent,
        OrderWorkerMatumiziComponent,
        WakalaWorkerDashboardComponent,
        BmwakalaWorkerListComponent,
        BmwakalaProfileComponent,
        BmwakalaMatumiziComponent,
        BmwakalaReportComponent,
        WorkerProfileComponent,
        OrderWorkerProfileComponent,
        WakalaMmilikiWoteComponent,
        WorkerProfileComponent,
        WakalaMmilikiDirectorListWakalaComponent,
        MadukaDashboardComponent,
        WakalaMmilikiDirectorListWorkersComponent,
        WakalaMmilikiDirectorOngezaWorkersComponent,
        WakalaMmilikiDirectorOngezaWakalaComponent,
        DukaDirectorProfileComponent,
        WorkersDashboardComponent,
        OrdersDashboardMmilikiComponent,
        OrdersDashboardMalipoComponent,
        OrdersDashboardOngezaWorkerComponent,
        OrdersDashboardManagerComponent,
        OrdersDashboardOngezaManagerComponent,
        OrdersDashboardWaliokopaComponent,
        OrdersDashboardOngezaMmilikiComponent,
        OrderManagersWaDirectorComponent,
        OrdersDashboardWaliokopaComponent,
        OrdersDashboardWaliokopaComponent,
        OrderManagersWoteComponent,
        OrderDirectorsWoteComponent,
        OrderWorkersWoteComponent,
        OrdersDashboardWaliokopaComponent,
        WorkerKaziComponent,
        WorkerMatumiziComponent,
        WorkersKuwekaComponent,
        WorkersKutoaComponent,
        OrdersSetOrdersComponent,
        DashboardHatiMikopoComponent,
        OverviewWorkerComponent,
        MadukaListProductsComponent,
        DukaDirectorReportComponent,
        DukaDirectorBorrowersComponent,
        MadukaListReportComponent,
        OverviewWakalaComponent,
        OverviewDirectorComponent,
        WorkersInfoMonthlyComponent,
        OrderDirectorReportComponent,
        WorkerPageReturnsComponent,
        OrdersDashboardBidhaaZoteComponent,
        OrdersDashboardWaliokopaComponent,
        OrderManagersWoteComponent,
        OrderDirectorsWoteComponent,
        OrderWorkersWoteComponent,
        OrderManagersDashboardComponent,
        OrderWorkersDashboardComponent,
        OrderDirectorsDashboardComponent,
        OrderWorkerReportDashboardComponent,
        OrderManagerReportDashboardComponent,
        OrderWorkerListsComponent,
        OrderDirectorProfileComponent,
        OrderManagerProfileComponent,
        OrderDirectorOrderListComponent,
        MadukaListSalesComponent,
        MadukaListBorrowersComponent,
        OrderManagerSuccessfulComponent,
        WorkerMadeniComponent,
        OrderClientsComponent,
        OrderManagerListsComponent,
        OrderReportComponent,
        OrderMatumiziComponent,
        OrderDirectorWorkersComponent,
        OrdersApprouvedComponent,
        OrderProductsComponent,
        OrderRegisterCustomersComponent,
        OrdersManagersProductsComponent,
        OrdersWorkerWithdrawComponent,
        OrdersCustomersListsComponent,
        OrderManagerWorkersListsComponent,
        OrderWorkerOrderListsComponent,
        SubscriptionsComponent,
        OrderManagersWaDirectorComponent,
        OrderWorkersWaDirectorComponent,
        NyumbaReportComponent,
        DukaDirectorDashboardComponent,
        DukaDirectorSalesComponent,
        DukaDirectorCreateComponent,
        DirectorDukaInvoicesComponent,
        AddedProductsComponent,
        IndustryComponent,
        DukaDirectorIndustryComponent,
        JobsComponent,
        MikopoAdvancedCalculatorComponent,
        DukaGraphsComponent,
    ],
    exports: [],
    bootstrap: [AppComponent], imports: [BrowserModule,
        NgProgressModule,
        ModalModule,
        BrowserAnimationsModule,
        // TooltipModule.forRoot(),
        CarouselModule,
        MatButtonModule,
        FormsModule,
        // NgbModule,
        NoopAnimationsModule,
        MatCheckboxModule,
        MatCardModule,
        MatDialogModule,
        MatInputModule,
        MatGridListModule,
        // MDBBootstrapModule.forRoot(),
        MatFormFieldModule,
        ReactiveFormsModule,
        MatTabsModule,
        MatIconModule,
        MatExpansionModule,
        ChartsModule,
        ReactiveFormsModule,
        FormsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatTableModule,
        MatListModule,
        MatProgressBarModule,
        // OpenSnackerComponent,
        MatRadioModule,
        MatMenuModule,
        MatSelectModule,
        MatSnackBarModule,
        MatPaginatorModule,
        // BsDropdownModule.forRoot(),
        // TooltipModule.forRoot(),
        // ModalModule.forRoot(),
        // BsDropdownModule.forRoot(),
        // TooltipModule.forRoot(),
        // ModalModule.forRoot(),
        RouterModule.forRoot([
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'About',
                component: AboutComponent
            },
            {
                path: 'jobs',
                component: JobsComponent
            },
            {
                path: 'Report',
                component: NyumbaReportComponent
            },
            {
                path: 'Subscriptions',
                component: SubscriptionsComponent
            },
            {
                path: 'Sub',
                component: DasboardMkopeshajiComponent,
                children: [
                    { path: 'Malipo', component: DasboardMkopeshajiMalipoComponent },
                    { path: 'wadaiwa', component: DasboardMkopeshajiWadaiwaMweziHuuComponent },
                    { path: 'Wateja', component: DasboardMkopeshajiWatejaComponent },
                    { path: 'Waliokopa', component: DasboardMkopeshajiWaliokopaComponent },
                    { path: 'Ongeza-Account', component: DasboardMkopeshajiOngezaAccountComponent },
                    { path: 'Info', component: DashboardMkopeshajiSikuComponent },
                    { path: 'InfoToa', component: DashboardMkopeshajiSikuToaComponent },
                    { path: 'company-Info', component: DashboardMkopeshajicompanyInfoComponent },
                    { path: 'Details', component: DetailsViewComponent, children: [
                            { path: 'Mkopoadmin', component: DashboardMkopeshajiMkopoLipaComponent },
                            { path: 'Hati', component: DashboardHatiMikopoComponent },
                            { path: 'calculator', component: MikopoAdvancedCalculatorComponent },
                            { path: 'Historia', component: AdminHistoryComponent },
                            { path: 'Ongeza-mkopo', component: DasboardMkopeshajiOngezaMkopoComponent },
                            { path: 'receipt', component: ReceiptComponent },
                            { path: 'Deposit', component: DepositComponent },
                            { path: 'Withdraw', component: WithdrawComponent },
                            { path: 'Personal', component: PersonalToaComponent },
                            { path: 'Edit', component: EditaccountComponent },
                            { path: 'Documents', component: BankstatementComponent, children: [
                                    { path: 'bankstat', component: BankComponent },
                                    { path: 'Identity', component: IdentityComponent },
                                    { path: 'Slip', component: SlipComponent },
                                    { path: 'Atm', component: AtmComponent },
                                ] },
                        ] },
                ]
            },
            {
                path: 'WorkerOverview',
                component: OverviewWorkerComponent, children: [
                    { path: 'Workers', component: WorkersDashboardComponent, children: [
                            { path: 'Profile', component: WorkerProfileComponent },
                            { path: 'Report', component: WorkerReportComponent },
                            { path: 'Matumizi', component: WorkerMatumiziComponent },
                            { path: 'Madeni', component: WorkerMadeniComponent },
                            { path: 'Kazi', component: WorkerKaziComponent, children: [
                                    { path: 'kutoa', component: WorkersKutoaComponent },
                                    { path: 'kuweka', component: WorkersKuwekaComponent },
                                    { path: 'kinachobaki', component: WorkerPageReturnsComponent },
                                ] },
                        ] }
                ]
            },
            {
                path: 'WakalaOverview',
                component: OverviewWakalaComponent, children: [
                    { path: 'Details', component: WakalaDashboardComponent, children: [
                            { path: 'Profile', component: BmwakalaProfileComponent },
                            { path: 'Workers', component: BmwakalaWorkerListComponent },
                            { path: 'Report', component: BmwakalaReportComponent },
                            { path: 'Matumizi', component: BmwakalaMatumiziComponent },
                            { path: 'Kazi', component: WakalaKaziComponent, children: [
                                    { path: 'Mtaji', component: WakalaKaziMtajiComponent },
                                    { path: 'Processors', component: WakalaKaziProcessorsComponent },
                                    { path: 'kinachobaki', component: WorkerPageReturnsComponent },
                                ] },
                        ] }
                ]
            },
            {
                path: 'DirectorOverview',
                component: OverviewDirectorComponent, children: [
                    { path: 'Detailse', component: WakalaMmilikiDashboardComponent, children: [
                            { path: 'Profile', component: WakalaMmilikiDirectorProfileComponent },
                            { path: 'Ongeza-wakala', component: WakalaMmilikiDirectorOngezaWakalaComponent },
                            { path: 'Ongeza-workers', component: WakalaMmilikiDirectorOngezaWorkersComponent },
                            { path: 'List-wakala', component: WakalaMmilikiDirectorListWakalaComponent },
                            { path: 'List-workers', component: WakalaMmilikiDirectorListWorkersComponent },
                            { path: 'Othersource', component: OtherSourcesComponent },
                        ] },
                ]
            },
            {
                path: 'Mikopo',
                component: MikopoFrontComponent
            },
            {
                path: 'Chumba-Details',
                component: NyumbaFrontDetailsComponent
            },
            {
                path: 'Nyumba-Zote',
                component: NyumbaFrontComponent, children: []
            },
            {
                path: '*',
                component: LoginComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'Register',
                component: RegisterComponent
            },
            {
                path: 'Details',
                component: DirecpayDetailsComponent
            },
            {
                path: 'wakala',
                component: WakalaAdminComponent, children: [
                    { path: 'ongeza-mmiliki-wakala', component: WakalaOngezaMmilikiComponent },
                    { path: 'ongeza-wakala', component: OngezaWakalaComponent },
                    { path: 'wakala-wote', component: WakalaWoteComponent },
                    { path: 'Wamiliki', component: WakalaMmilikiWoteComponent, },
                    { path: 'Workers', component: WorkersDashboardComponent, children: [
                            { path: 'Worker-Info', component: WorkersInfoMonthlyComponent },
                            { path: 'Profile', component: WorkerProfileComponent },
                            { path: 'Report', component: WorkerReportComponent },
                            { path: 'Madeni', component: WorkerMadeniComponent },
                            { path: 'Matumizi', component: WorkerMatumiziComponent },
                            { path: 'Kazi', component: WorkerKaziComponent, children: [
                                    { path: 'kutoa', component: WorkersKutoaComponent },
                                    { path: 'kuweka', component: WorkersKuwekaComponent },
                                    { path: 'kinachobaki', component: WorkerPageReturnsComponent },
                                ] },
                        ] },
                    { path: 'Detailse', component: WakalaMmilikiDashboardComponent, children: [
                            { path: 'Profile', component: WakalaMmilikiDirectorProfileComponent },
                            { path: 'Ongeza-wakala', component: WakalaMmilikiDirectorOngezaWakalaComponent },
                            { path: 'Ongeza-workers', component: WakalaMmilikiDirectorOngezaWorkersComponent },
                            { path: 'List-wakala', component: WakalaMmilikiDirectorListWakalaComponent },
                            { path: 'List-workers', component: WakalaMmilikiDirectorListWorkersComponent },
                        ] },
                    { path: 'list-of-workers', component: WakalaWorkersComponent },
                    { path: 'waliokopa-wakala', component: MadukaWaliokopaComponent },
                    { path: 'Ongeza-workers', component: OngezaWakalaWorkersComponent },
                    { path: 'Details', component: WakalaDashboardComponent, children: [
                            { path: 'Profile', component: BmwakalaProfileComponent },
                            { path: 'Workers', component: BmwakalaWorkerListComponent },
                            { path: 'Report', component: BmwakalaReportComponent },
                            { path: 'Matumizi', component: BmwakalaMatumiziComponent },
                            { path: 'Kazi', component: WakalaKaziComponent, children: [
                                    { path: 'Mtaji', component: WakalaKaziMtajiComponent },
                                    { path: 'Processors', component: WakalaKaziProcessorsComponent },
                                    { path: 'kinachobaki', component: WorkerPageReturnsComponent },
                                ] },
                        ] },
                ]
            },
            { path: 'DukaMmilikiDashboard', component: DukaDirectorDashboardComponent, children: [
                    { path: 'Malipo-wafanyakazi', component: MadukaMalipoWaudumuComponent },
                    { path: 'Sales', component: DukaDirectorSalesComponent },
                    { path: 'Products', component: DukaDirectorProductsComponent },
                    { path: 'order', component: DukaDirectorOrderComponent },
                    { path: 'Report', component: DukaDirectorReportComponent },
                    { path: 'Profile', component: DukaDirectorProfileComponent },
                    { path: 'Graph', component: DukaGraphsComponent },
                    { path: 'Create', component: DukaDirectorCreateComponent },
                    { path: 'Borrowers', component: DukaDirectorBorrowersComponent },
                    { path: 'Matumizi', component: DukaDirectorMatumiziComponent },
                    { path: 'Invoices', component: DirectorDukaInvoicesComponent },
                    { path: 'Added', component: AddedProductsComponent },
                    { path: 'movement', component: DukaMovententComponent },
                    { path: 'Industry', component: DukaDirectorIndustryComponent },
                    { path: 'Othersource', component: OtherSourcesComponent },
                ] },
            { path: 'DukaDashboard', component: MadukaDashboardComponent, children: [
                    { path: 'Malipo-wafanyakazi', component: MadukaMalipoWaudumuComponent },
                    { path: 'Sales', component: MadukaListSalesComponent },
                    { path: 'Products', component: MadukaListProductsComponent },
                    { path: 'Report', component: MadukaListReportComponent },
                    { path: 'Added', component: AddedProductsComponent },
                    { path: 'Profile', component: MadukaListProfileComponent },
                    { path: 'Borrowers', component: MadukaListBorrowersComponent },
                    { path: 'Matumizi', component: MadukaListMatumiziComponent },
                    { path: 'Invoices', component: DirectorDukaInvoicesComponent },
                ] },
            {
                path: 'duka',
                component: AdminDashboardDukaComponent, children: [
                    { path: 'ongeza-mmiliki', component: OngezaMmilikiDukaComponent },
                    { path: 'Wamiliki', component: DukaWamilikiComponent },
                    { path: 'DukaMmilikiDashboard', component: DukaDirectorDashboardComponent, children: [
                            { path: 'Malipo-wafanyakazi', component: MadukaMalipoWaudumuComponent },
                            { path: 'Sales', component: DukaDirectorSalesComponent },
                            { path: 'Products', component: DukaDirectorProductsComponent },
                            { path: 'order', component: DukaDirectorOrderComponent },
                            { path: 'Report', component: DukaDirectorReportComponent },
                            { path: 'Profile', component: DukaDirectorProfileComponent },
                            { path: 'Create', component: DukaDirectorCreateComponent },
                            { path: 'Graph', component: DukaGraphsComponent },
                            { path: 'Borrowers', component: DukaDirectorBorrowersComponent },
                            { path: 'Matumizi', component: DukaDirectorMatumiziComponent },
                            { path: 'Invoices', component: DirectorDukaInvoicesComponent },
                            { path: 'Industry', component: DukaDirectorIndustryComponent },
                            { path: 'movement', component: DukaMovententComponent },
                            { path: 'Othersource', component: OtherSourcesComponent },
                        ] },
                    { path: 'ongeza-duka', component: OngezaDukaComponent },
                    { path: 'maduka-yote', component: MadukaYoteComponent },
                    { path: 'bidhaa-zote', component: MadukaYoteBidhaaZoteComponent },
                    { path: 'waliokopa', component: MadukaWaliokopaComponent },
                    { path: 'Malipo-wafanyakazi', component: MadukaMalipoWaudumuComponent },
                    { path: 'DukaDashboard', component: MadukaDashboardComponent, children: [
                            { path: 'Malipo-wafanyakazi', component: MadukaMalipoWaudumuComponent },
                            { path: 'Sales', component: MadukaListSalesComponent },
                            { path: 'Products', component: MadukaListProductsComponent },
                            { path: 'Report', component: MadukaListReportComponent },
                            { path: 'Added', component: AddedProductsComponent },
                            { path: 'Profile', component: MadukaListProfileComponent },
                            { path: 'Borrowers', component: MadukaListBorrowersComponent },
                            { path: 'Matumizi', component: MadukaListMatumiziComponent },
                        ] },
                ]
            },
            {
                path: 'Orders',
                component: OrdersDashboardComponent, children: [
                    { path: 'ongeza-mmiliki', component: OrdersDashboardOngezaMmilikiComponent },
                    { path: 'ongeza-Manager', component: OrdersDashboardOngezaManagerComponent },
                    { path: 'ongeza-Worker', component: OrdersDashboardOngezaWorkerComponent },
                    { path: 'bidhaa-zote', component: OrdersDashboardBidhaaZoteComponent },
                    { path: 'waliokopa', component: OrdersDashboardWaliokopaComponent },
                    { path: 'Malipo', component: OrdersDashboardMalipoComponent },
                    { path: 'directors-wote', component: OrderDirectorsWoteComponent },
                    { path: 'managers', component: OrderManagersWoteComponent },
                    { path: 'dashboard', component: OrderManagersDashboardComponent, children: [
                            { path: 'ongeza-Manager', component: OrdersDashboardOngezaManagerComponent },
                            { path: 'ongeza-Workers', component: OrdersDashboardOngezaWorkerComponent },
                            { path: 'managers', component: OrderManagersWoteComponent },
                            { path: 'ongeza-Products', component: OrdersManagersOngezaProductsComponent },
                            { path: 'Products-Lists', component: OrdersManagersProductsComponent },
                            { path: 'workers', component: OrderManagerWorkersListsComponent },
                            { path: 'Report', component: OrderReportComponent },
                            { path: 'Orders', component: OrderManagerListsComponent },
                            { path: 'Matumizi', component: OrderMatumiziComponent },
                            { path: 'Profile', component: OrderManagerProfileComponent },
                            { path: 'clients', component: OrderClientsComponent },
                        ] },
                    { path: 'Directors-dashboard', component: OrderDirectorsDashboardComponent, children: [
                            { path: 'ongeza-Worker', component: OrdersDashboardOngezaWorkerComponent },
                            { path: 'ongeza-Manager', component: OrdersDashboardOngezaManagerComponent },
                            { path: 'workers', component: OrderWorkersWaDirectorComponent },
                            { path: 'managers', component: OrderManagersWaDirectorComponent },
                            { path: 'Report', component: OrderDirectorReportComponent },
                            { path: 'Orders', component: OrdersListDirectorComponent },
                            { path: 'Orders-Approved', component: OrdersDirectorApprovedComponent },
                            { path: 'Profile', component: OrderDirectorProfileComponent },
                            { path: 'Matumizi', component: OrderDirectorMatumiziComponent },
                        ] },
                    { path: 'Worker-dashboard', component: OrderWorkersDashboardComponent, children: [
                            { path: 'Matumizi', component: OrderMatumiziComponent },
                            { path: 'Profile', component: OrderWorkerProfileComponent },
                            { path: 'Products', component: OrderProductsComponent },
                            { path: 'Customers', component: OrdersCustomersListsComponent },
                            { path: 'SetOrders', component: OrdersSetOrdersComponent },
                            { path: 'Ongeza-customers', component: OrdersOngezaCustomersComponent },
                            { path: 'workers', component: OrderWorkersWoteComponent },
                            { path: 'Work', component: OrderWorkingDashboardComponent, children: [
                                    { path: 'Customers', component: OrderCustomersComponent },
                                    { path: 'Register', component: OrderRegisterCustomersComponent },
                                ] },
                            { path: 'Report', component: OrderWorkerReportDashboardComponent, children: [
                                    { path: 'SuccessfulOrders', component: OrderManagerSuccessfulComponent },
                                    { path: 'OrderList', component: OrderWorkerOrderListsComponent },
                                    { path: 'Approuved', component: OrdersApprouvedComponent },
                                ] },
                            { path: 'OrderList', component: OrderWorkerOrderListsComponent },
                            { path: 'kazi', component: OrderWorkersWoteComponent },
                        ] },
                    { path: 'workers-wote', component: OrderWorkersWoteComponent },
                ]
            },
            {
                path: ':id',
                component: DirectpaymentComponent, children: [
                // {path: 'Nyumba', component: NyumbaComponent},
                // {path: 'Details', component: DirecpayDetailsComponent},
                ]
            },
            {
                path: 'Nyumba-dash',
                component: NyumbaConnectorComponent, canActivate: [GuardGuard],
                children: [
                    { path: 'Nyumba', component: NyumbaComponent },
                    { path: 'personalDetails', component: PersonalNyumbaDetailsComponent, children: [
                            { path: 'Personali-details', component: PersonalPaymentsComponent },
                            { path: 'PersonaliEdits', component: EditPersonalComponent },
                            { path: 'Room-Price', component: NyumbaDashboardRoomPriceComponent },
                            { path: 'documents', component: NyumbaMiddledocumentsComponent, children: [
                                    { path: 'mkataba', component: NyumbaMkatabaComponent },
                                    { path: 'Identity', component: NyumbaIdentityComponent },
                                    { path: 'statements', component: NyumbaStatementsComponent },
                                    { path: 'application', component: NyumbaApplicationComponent },
                                ] },
                            { path: 'Renew', component: RudiaMkatabaComponent },
                        ] },
                    { path: 'Ongeza-nyumba', component: OngezaNyumbaComponent },
                    { path: 'MmilikiDetails', component: MmilikiDetailsComponent, children: [
                            { path: 'OwnerDeposit', component: OwnerDepositComponent },
                            { path: 'OwnerWithdraw', component: OwnerWithdrawComponent },
                            { path: 'OwnerEdit', component: OwnerEditComponent },
                            { path: 'OwnerMalipo', component: OwnerMalipoComponent },
                            { path: 'OwnerDocuments', component: OwnerDocumentsComponent, children: [
                                    { path: 'OwnerKitambulisho', component: OwnerKitambulishoComponent },
                                    { path: 'OwnerSlip', component: OwnerSlipComponent },
                                    { path: 'OwnerApplication', component: OwnerApplicationComponent },
                                    { path: 'OwnerMkataba', component: OwnerMkatabaComponent },
                                ] },
                        ] },
                    { path: 'Wamiliki', component: WamilikiComponent },
                    { path: 'Wanaodaiwa', component: NyumbaWadaiwaComponent },
                    { path: 'ongezaNyumbaOwner', component: OngezaHouseOwnerComponent },
                    { path: 'wapangaji-wt', component: NyumbaWapangajiWoteComponent },
                    { path: 'malipo', component: NyumbaMalipoComponent },
                    { path: 'Nyumba-Info', component: InfoNyumbaComponent },
                    { path: 'Details', component: NyumbaDetailsComponent, children: [
                            { path: 'wapangaji', component: WapangajiComponent },
                            { path: 'SingleNyumba-Info', component: NyumbaInfo1Component },
                            { path: 'wazi', component: VyumbaWaziComponent },
                            { path: 'OngezaChumba', component: OngezaChumbaComponent },
                            { path: 'pangisha', component: PangishaComponent },
                            { path: 'marekebisho', component: MarekebishoComponent },
                            { path: 'EditNyumba', component: PersonalEditAccountComponent },
                        ] },
                ]
            },
            {
                path: 'Admindash',
                component: AdminDashboardComponent, canActivate: [GuardGuard], children: [
                    { path: 'Wateja', component: WotewatejaComponent },
                    { path: 'Waliokopa', component: WaliokopaComponent },
                    { path: 'wadaiwa', component: WadaiwamweziComponent },
                    { path: 'Nyumba', component: NyumbaComponent },
                    { path: 'General-Information', component: InfosComponent },
                    { path: 'Information', component: SikuDeteilsComponent },
                    { path: 'KopeshaDeteils', component: SikuKopeshaDeteilsComponent },
                    { path: 'Ongeza-Account', component: OngezaAccountComponent },
                    { path: 'Ongeza-Kampuni', component: OngezaKampuniComponent },
                    { path: 'Malipo', component: MalipoComponent },
                    { path: 'Waliojulishwa', component: WaliojulishwaComponent, children: [
                            { path: 'Mwezihuu', component: MwezihuumesejiComponent },
                            { path: 'Overdue', component: OverdueThisMonthComponent },
                            { path: 'TumaMsj', component: TumaMesgComponent },
                            { path: 'Chat', component: SmsChatComponent }
                        ] },
                    { path: 'Details', component: DetailsViewComponent, children: [
                            { path: 'Mkopoadmin', component: AdminKopaComponent },
                            { path: 'Hati', component: DashboardHatiMikopoComponent },
                            { path: 'Historia', component: AdminHistoryComponent },
                            { path: 'Ongeza-mkopo', component: OngezaMkopoComponent },
                            { path: 'receipt', component: ReceiptComponent },
                            { path: 'Deposit', component: DepositComponent },
                            { path: 'Withdraw', component: WithdrawComponent },
                            { path: 'Personal', component: PersonalToaComponent },
                            { path: 'Edit', component: EditaccountComponent },
                            { path: 'Documents', component: BankstatementComponent, children: [
                                    { path: 'bankstat', component: BankComponent },
                                    { path: 'Identity', component: IdentityComponent },
                                    { path: 'Slip', component: SlipComponent },
                                    { path: 'Atm', component: AtmComponent },
                                ] },
                        ] },
                ]
            },
            {
                path: 'Dashboard',
                component: DashboardComponent, canActivate: [GuardGuard], children: [
                    { path: 'Loan', component: LoanComponent },
                    { path: 'Account_info', component: AccountInfoComponent },
                    { path: 'Edit', component: EditComponent },
                    { path: 'Deposit', component: DepositComponent },
                    { path: 'Withdraw', component: WithdrawComponent },
                    { path: 'History', component: HistoryComponent },
                ]
            },
        ], {})], providers: [RestframeworkService, LowlayerComponent, WorkersDashboardComponent, DukaDirectorDashboardComponent, NyumbaDashboardRoomPriceComponent, DasboardMkopeshajiComponent, LoginComponent, NyumbaFrontDetailsComponent, MmilikiDetailsComponent, DetailsViewComponent, ReceiptComponent, NyumbaIdentityComponent, AdminDashboardComponent, PersonalNyumbaDetailsComponent, NyumbaConnectorComponent, NyumbaMkatabaComponent, GuardGuard, provideHttpClient(withXhr(), withInterceptorsFromDi())] })
export class AppModule {
  all;
  stored;
  dataid;
  givenid;
  constructor( public restframework:RestframeworkService, public router:Router){

    // this.stored= localStorage.getItem('userData')
    // this.restframework.getauth().then(result=>{
    //   this.all = result;
    //   for(const m of this.all){
    //     if(m.generated_key === this.stored){
    //       if(m.Status ==='logedout'){
    //         localStorage.removeItem('userData')
    //         this.router.navigate(['login']);
    //       }

    //     }

    //   }
    // })
  }


 }
