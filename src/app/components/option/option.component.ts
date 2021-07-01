import { Component, OnInit } from '@angular/core';
import { Option } from 'src/app/models/option';
import { ToastrService } from 'ngx-toastr';
import { OptionService } from 'src/app/services/option.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  FormArray,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product';
import { option } from 'ngx-bootstrap-icons';
import { ProductOption } from 'src/app/models/productOption';
import { map } from 'rxjs/operators';
import { BasketService } from 'src/app/services/basket.service';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css'],
})
export class OptionComponent implements OnInit {
  productAddForm: FormGroup;
  productTest: Product;
  options: Option[] = [];
  lvlOneOptions: Option[] = [];
  lvlTwoOptions: Option[] = [];
  lvlThreeOptions: Option[] = [];
  lvlFourOptions: Option[] = [];
  lvlFiveOptions: Option[] = [];
  lvlSixOptions: Option[] = [];
  lvlSevenOptions: Option[] = [];
  lvlEightOptions: Option[] = [];
  lvlNineOptions: Option[] = [];
  lvlTenOptions: Option[] = [];
  lvlElevenOptions: Option[] = [];
  lvlTwelveOptions: Option[] = [];
  lvlThirdteenOptions: Option[] = [];
  lvlFourteenOptions: Option[] = [];
  lvlFifthteenOptions: Option[] = [];
  lvlSixthteenOptions?: Option[] = [];

  defaultselect: Option;

  hideItem: boolean;

  selectedNum: number;
  selectedLvl: Option;
  selectedLvlOne: Option;
  selectedLvlTwo: Option;
  selectedLvlThree: Option;
  selectedLvlFour: Option;
  selectedLvlFive: Option;
  selectedLvlSix: Option;
  selectedLvlSeven: Option;
  selectedLvlEight: Option;
  selectedLvlNine: Option;
  selectedLvlTen: Option;
  selectedLvlEleven: Option;
  selectedLvlTwelve: Option;
  selectedLvlThirdteen: Option;
  selectedLvlFourteen: Option;
  selectedLvlFifthteen: Option;
  selectedLvlSixthteen: Option;
  optionFour: Option;
  apt: Option;
  listOfId: any = [];
  crt = new Cart();

  a: Option[] = [];
  listOfOption: ProductOption[] = [];

  constructor(
    private optionService: OptionService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private cartService: CartService,
    private basketService: BasketService,
    private router: Router
  ) {}
  label1: string;
  label2: string;
  ngOnInit(): void {
    this.createProductAddForm();

    this.optionService.getOptionsById(0, 0).subscribe((response) => {
      this.options = response.data;
      this.label1 = this.options[0].name;
    });
  }

  getCartAsList(group: FormGroup): void {
    this.listOfOption = [];
    Object.keys(group.controls).forEach((key: any) => {
      const abstractControl = group.get(key);
      let item = new ProductOption();
      item.optionId = abstractControl.value.id;
      this.listOfId.push(item.optionId);
      this.listOfOption.push(item);
    });

    let product = new Product();
    product.stockCode = this.listOfId.join('');
    product.quantity = 49;
    product.productOptions = this.listOfOption;
    console.log(product.stockCode);

    this.basketService.updateProductQuantity(product).subscribe(
      (response) => {
        this.toastrService.success(response.message),
          this.router.navigate(['orders']);
      },
      (responseError) => {
        console.log(responseError);
        this.toastrService.error(responseError.error);
      }
    );
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      opt1: ['', Validators.required],
      opt2: ['', Validators.required],
      opt3: [''],
      opt4: [''],
      opt5: [''],
      opt6: [''],
      opt7: [''],
      opt8: [''],
      opt9: [''],
      opt10: [''],
      opt11: [''],
      opt12: [''],
      opt13: [''],
      opt14: [''],
      opt15: [''],
      opt16: [''],
    });
  }

  callLvlOne(): void {
    //this.hideItem=false;
    //alert('Show alert!');
    this.optionService
      .getOptionsById(this.selectedLvl.id, 0)
      .subscribe((response) => {
        this.lvlOneOptions = response.data;
        this.label2 = this.lvlOneOptions[0].name;
      });
  }
  callLvlTwo(): void {
    // this.hideItem=false;
    this.optionService
      .getOptionsById(this.selectedLvlOne.id, 0)
      .subscribe((response) => {
        this.lvlTwoOptions = response.data;
      });
  }

  callLvlThree(): void {
    this.lvlThreeOptions = [];
    this.optionService
      .getOptionsById(this.selectedLvlTwo.id, 1)
      .subscribe((response) => {
        this.lvlThreeOptions = response.data;

        this.selectedLvlThree = this.lvlThreeOptions[0];
      });

    this.optionService
      .getOptionsById(this.selectedLvlTwo.id, 2)
      .subscribe((response) => {
        this.lvlFourOptions = response.data;

        this.selectedLvlFour = this.lvlFourOptions[0];
      });

    this.optionService
      .getOptionsById(this.selectedLvlTwo.id, 3)
      .subscribe((response) => {
        this.lvlFiveOptions = response.data;
        this.selectedLvlFive = this.lvlFiveOptions[0];
      });

    this.optionService
      .getOptionsById(this.selectedLvlTwo.id, 4)
      .subscribe((response) => {
        this.lvlSixOptions = response.data;
        this.selectedLvlSix = this.lvlSixOptions[0];
      });

    this.optionService
      .getOptionsById(this.selectedLvlTwo.id, 5)
      .subscribe((response) => {
        this.lvlSevenOptions = response.data;
        this.selectedLvlSeven = this.lvlSevenOptions[0];
      });

    this.optionService
      .getOptionsById(this.selectedLvlTwo.id, 6)
      .subscribe((response) => {
        this.lvlEightOptions = response.data;
        this.selectedLvlEight = this.lvlEightOptions[0];
      });

    this.optionService
      .getOptionsById(this.selectedLvlTwo.id, 7)
      .subscribe((response) => {
        this.lvlNineOptions = response.data;
        this.selectedLvlNine = this.lvlNineOptions[0];
      });

    this.optionService
      .getOptionsById(this.selectedLvlTwo.id, 8)
      .subscribe((response) => {
        this.lvlTenOptions = response.data;
        this.selectedLvlTen = this.lvlTenOptions[0];
      });
    this.optionService
      .getOptionsById(this.selectedLvlTwo.id, 9)
      .subscribe((response) => {
        this.lvlElevenOptions = response.data;
        this.selectedLvlEleven = this.lvlElevenOptions[0];
      });

    this.optionService
      .getOptionsById(this.selectedLvlTwo.id, 10)
      .subscribe((response) => {
        this.lvlTwelveOptions = response.data;
        this.selectedLvlTwelve = this.lvlTwelveOptions[0];
      });
    this.optionService
      .getOptionsById(this.selectedLvlTwo.id, 11)
      .subscribe((response) => {
        this.lvlThirdteenOptions = response.data;
        this.selectedLvlThirdteen = this.lvlThirdteenOptions[0];
      });
    this.optionService
      .getOptionsById(this.selectedLvlTwo.id, 12)
      .subscribe((response) => {
        this.lvlFourteenOptions = response.data;
        this.selectedLvlFourteen = this.lvlFourteenOptions[0];
      });
    this.optionService
      .getOptionsById(this.selectedLvlTwo.id, 13)
      .subscribe((response) => {
        this.lvlFifthteenOptions = response.data;
        this.selectedLvlFifthteen = this.lvlFifthteenOptions[0];
        console.log(this.selectedLvlFifthteen);
      });
    // this.optionService
    //   .getOptionsById(this.selectedLvlTwo.id, 14)
    //   .subscribe((response) => {
    //     this.lvlSixthteenOptions = response.data;

    //     this.selectedLvlSixthteen = this.lvlSixthteenOptions[0];
    //     console.log(this.selectedLvlSixthteen)

    //   });
  }
  addToCard() {
    this.getCartAsList(this.productAddForm);

    if (this.productAddForm.valid) {
      let productModel: Product = Object.assign({}, this.productAddForm.value);
      this.cartService.addToCart(productModel);
      //let optionList:any = Object.assign({}, this.productAddForm.value);
      //let _stockCode =

      this.productTest = new Product();
      this.productTest.stockCode = this.listOfOption.join('');

      //this.productTest.productOptions = optionList;
      //let a = optionList.join("");
      //console.log(this.productTest.stockCode)
      // console.log(productModel)
      this.toastrService.success('Sepete eklendi');
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }

  cartCheck(product:Product) {
    this.basketService.getbasket2().subscribe((response) => {
      this.crt = response[0];
      console.log(this.crt.products);
    });
    this.crt.products.forEach(cartProduct => {
        
      if (cartProduct.stockCode == product.stockCode)
      {
        
      }});
    
  }
}
