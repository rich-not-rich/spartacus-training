export declare const myAccount: {
    orderDetails: {
        orderId: string;
        placed: string;
        status: string;
        shippedOn: string;
        inProcess: string;
        pending: string;
        deliveryStatus_READY_FOR_PICKUP: string;
        deliveryStatus_PICKUP_COMPLETE: string;
        deliveryStatus_SHIPPED: string;
        deliveryStatus_CANCELLED: string;
        statusDisplay_cancelled: string;
        statusDisplay_cancelling: string;
        statusDisplay_completed: string;
        statusDisplay_created: string;
        statusDisplay_error: string;
        statusDisplay_Error: string;
        statusDisplay_open: string;
        statusDisplay_processing: string;
        consignmentTracking: {
            action: string;
            dialog: {
                header: string;
                shipped: string;
                estimate: string;
                carrier: string;
                trackingId: string;
                noTracking: string;
                loadingHeader: string;
            };
        };
        cancellationAndReturn: {
            returnAction: string;
            cancelAction: string;
            item: string;
            itemPrice: string;
            quantity: string;
            returnQty: string;
            cancelQty: string;
            setAll: string;
            totalPrice: string;
            submit: string;
            returnSuccess: string;
            cancelSuccess: string;
        };
    };
    orderHistory: {
        orderHistory: string;
        orderId: string;
        date: string;
        status: string;
        total: string;
        noOrders: string;
        startShopping: string;
        sortByMostRecent: string;
    };
    closeAccount: {
        confirmAccountClosure: string;
        confirmAccountClosureMessage: string;
        closeMyAccount: string;
        accountClosedSuccessfully: string;
        accountClosedFailure: string;
    };
    updateEmailForm: {
        newEmailAddress: {
            label: string;
            placeholder: string;
        };
        confirmNewEmailAddress: {
            label: string;
            placeholder: string;
        };
        enterValidEmail: string;
        bothEmailMustMatch: string;
        password: {
            label: string;
            placeholder: string;
        };
        pleaseInputPassword: string;
        emailUpdateSuccess: string;
    };
    updatePasswordForm: {
        oldPassword: {
            label: string;
            placeholder: string;
        };
        oldPasswordIsRequired: string;
        newPassword: {
            label: string;
            placeholder: string;
        };
        passwordMinRequirements: string;
        confirmPassword: {
            label: string;
            placeholder: string;
        };
        bothPasswordMustMatch: string;
        passwordUpdateSuccess: string;
    };
    updateProfileForm: {
        title: string;
        none: string;
        firstName: {
            label: string;
            placeholder: string;
        };
        firstNameIsRequired: string;
        lastName: {
            label: string;
            placeholder: string;
        };
        lastNameIsRequired: string;
        profileUpdateSuccess: string;
    };
    consentManagementForm: {
        clearAll: string;
        selectAll: string;
        message: {
            success: {
                given: string;
                withdrawn: string;
            };
        };
    };
    myCoupons: {
        noCouponsMessage: string;
        effectiveTitle: string;
        Effective: string;
        PreSession: string;
        ExpireSoon: string;
        readMore: string;
        notification: string;
        findProducts: string;
        status: string;
        dialogTitle: string;
        claimCustomerCoupon: string;
        myCoupons: string;
        startDateAsc: string;
        startDateDesc: string;
        endDateAsc: string;
        endDateDesc: string;
        sortByMostRecent: string;
        notesPreffix: string;
        notesLink: string;
        notesSuffix: string;
    };
    notificationPreference: {
        message: string;
        note: string;
        noteMessage: string;
        EMAIL: string;
        SMS: string;
        SITE_MESSAGE: string;
    };
    myInterests: {
        header: string;
        item: string;
        price: string;
        notifications: string;
        noInterests: string;
        inStock: string;
        lowStock: string;
        outOfStock: string;
        BACK_IN_STOCK: string;
        sortByMostRecent: string;
        expirationDate: string;
        productId: string;
        remove: string;
        sorting: {
            byNameAsc: string;
            byNameDesc: string;
        };
    };
    AccountOrderHistoryTabContainer: {
        tabs: {
            AccountOrderHistoryComponent: string;
            OrderReturnRequestListComponent: string;
        };
    };
    returnRequestList: {
        returnRequestId: string;
        orderId: string;
        date: string;
        status: string;
        sortByMostRecent: string;
        statusDisplay_APPROVAL_PENDING: string;
        statusDisplay_CANCELED: string;
        statusDisplay_CANCELLING: string;
        statusDisplay_WAIT: string;
        statusDisplay_RECEIVED: string;
        statusDisplay_RECEIVING: string;
        statusDisplay_APPROVING: string;
        statusDisplay_REVERSING_PAYMENT: string;
        statusDisplay_PAYMENT_REVERSED: string;
        statusDisplay_PAYMENT_REVERSAL_FAILED: string;
        statusDisplay_REVERSING_TAX: string;
        statusDisplay_TAX_REVERSED: string;
        statusDisplay_TAX_REVERSAL_FAILED: string;
        statusDisplay_COMPLETED: string;
    };
    returnRequest: {
        returnRequestId: string;
        orderCode: string;
        status: string;
        cancel: string;
        item: string;
        itemPrice: string;
        returnQty: string;
        total: string;
        summary: string;
        subtotal: string;
        deliveryCode: string;
        estimatedRefund: string;
        note: string;
        cancelSuccess: string;
    };
    wishlist: {
        empty: string;
    };
};
