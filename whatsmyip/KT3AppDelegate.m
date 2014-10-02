#import "KT3AppDelegate.h"

@implementation KT3AppDelegate

- (NSArray *)strawServices
{
    return @[[STWServiceHttp class], [STWServiceLocale class], [StrawServiceToast class]];
}

@end
